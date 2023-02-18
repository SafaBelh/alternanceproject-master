let crypto = require("crypto");
let { promisify } = require("util");
let User = require("./../models/userModel");
let catchAsync = require("./../utils/catchAsync");
// let dotenv = require('dotenv').config()
let AppError = require("./../utils/appError");
let sendEmail = require("./../utils/email");

// JWT
let jwt = require("jsonwebtoken");

// Token Function

// create token
let signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Create And Send Token -- Function
let createSendToken = (user, statusCode, res) => {
  let token = signToken(user._id);

  let cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  // Remove Password From The OutPut
  user.password = undefined;

  res.status(statusCode).json({
    status: "Success",
    token,
    data: { user },
  });
};

// SIGNUP
exports.signup = catchAsync(async (req, res, next) => {
  let newUser = await User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
  });
  createSendToken(newUser, 201, res);
});

// LOGIN
exports.login = catchAsync(async (req, res, next) => {
  //console.log(req.body);
  let { email, password } = req.body;

  // // 1) Check if email & password exist ( In Request )

  if (!email || !password) {
    return next(new AppError("Please Provide Email And Password ! ", 400));
  }
  // 2) Check If User Exists & Password Is Correct // But this will not contain the password --> Select it

  let user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect EMAIL Or PASSWORD ! ", 401));
  }
  // 3) If Everything OK , Send token to client
  createSendToken(user, 200, res);
});

// PROTECT ROUTES
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting Token And Check If It's There
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You Are Not Logged In ! Please Log In To Get Access ", 401)
    );
  }
  // 2) Token Verification
  let decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //console.log(decoded);

  // 3) Check If User Still Exists
  let currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    next(
      new AppError(
        "The User Belonging To This Token Does No Longer Exists",
        401
      )
    );
  }

  // 4) Check If User Changed Password After The Token Was Issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    next(
      new AppError(
        "User Recently Changed Password ! Please Log In Again ! ",
        401
      )
    );
  }

  // 5) Grant Access To Protected Route
  req.user = currentUser;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        new AppError("You Do Not Have Permission To Perform This Action", 403)
      );
    }
    next();
  };
};

/////// Password Forget Functionality && Sending Email

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) get user based on POSTed email

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There Is No User With This Email ! ", 404));
  }

  // 2) Generate the random reset token
  let resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) sent it to user's email

  let resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;
  //console.log(resetUrl)
  let message = `Forgot your password ? Submit a PATCH request with your new password and passwordConfirm to : ${resetUrl}.\nIf you didn't forget your password , please ignore this Email`;
  //console.log(message)

  try {
    await sendEmail({
      email: user.email,
      subject: `Your password reset token ( Valid For 10 mins)`,
      message,
    });
    res.status(200).json({
      status: "Success",
      message: "Token Sent To Email",
    });
  } catch (error) {
    (user.passwordResetToken = undefined),
      (user.passwordResetExpires = undefined);
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        "There Was An Error Sending Token ! Please try again later ",
        500
      )
    );
  }
});

////////// Password Reset Functionality
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get User Based On The Token
  let hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  let user = await User.findOne({
    passwordResetToken: hashedToken,
    /// Check If The Token Is Still Available
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If Token Has Not Expired and There Is User , Set The New Password
  if (!user) {
    return next(new AppError("Token Is Invalid Or Has Expired ! ", 400));
  }
  console.log(user);
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update ChangedPasswordAt Property For The User

  // 4) Log The User In , Send JWT
  createSendToken(user, 201, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get User From Collection
  let user = await User.findById(req.user.id).select("+password");

  //if (!user) return next(new AppError('No User With This Email ! ', 404));
  // 2) Check If POSTed Current Password Is Correct
  //console.log(user.password);
  if (!user.correctPassword(req.body.currentPassword, user.password)) {
    return next(new AppError("Your Current Password Is Wrong !", 401));
  }
  // 3) If So , Update Password
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.passwordConfirm;
  user.save();

  // 4) Log User In , Send JWT
  let token = signToken(user._id);
  res.status(201).json({
    status: "Success",
    data: { user },
  });
});
