const AppError = require("../utils/appError");
let catchAsync = require("./../utils/catchAsync");

let User = require("./../models/userModel");
let factory = require("./handlerFactory");

// Function : Filtred Out Uwanted Fields Names That Are Not Allowed To Be Updated
let filterObj = (Obj, ...allowedFields) => {
  let newObj = {};
  Object.keys(Obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = Obj[el];
  });
  return newObj;
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.getAllUsers = factory.getAll(User);

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create Error If User Posts Password
  if (req.body.password || req.body.confirmPassword)
    return next(new AppError("This Route Is Not For Password Updates ! ", 400));
  // 2) Filtred Out Uwanted Fields Names That Are Not Allowed To Be Updated
  let filtredBody = filterObj(req.body, "name", "email");
  // 3) Update User Doc
  let updatedUser = await User.findOneAndUpdate(req.user.id, filtredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "Success",
    data: updatedUser,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  let deletedUserId = req.params.id;
  await User.findByIdAndUpdate(deletedUserId, { active: false });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});

exports.getUser = factory.getOne(User);

exports.createNewUser = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This Route Is Not Defined ! Please Use SignUp Instead ! ",
  });
};
exports.updatingUser = factory.updateOne(User);

