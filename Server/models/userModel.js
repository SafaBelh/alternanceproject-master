let crypto = require("crypto");
let bcrypt = require("bcryptjs");
let validator = require("validator");

let mongoose = require("mongoose");
const AppError = require("../utils/appError");

let userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  role: {
    type: String,
    enum: ["user", "developer", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    // This Only Works On Create and  SAVE
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
  },
});

//////////////////////// MANAGING PASSWORD //////////////////////

// Between Getting The Data And Saving It To The DB

// Encrypting  Password
userSchema.pre("save", async function (next) {
  // Only Run This Function If Password Was Aactually Modified
  if (!this.isModified("password")) return next();

  // Encrypting // HASHING With Cost Of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete a field
  this.passwordConfirm = undefined;
});

userSchema.pre("save", function (next) {
  // If The Password is Not Defined Skip this fn
  if (!this.isModified || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Comparing encrypted password   // check if password is correct
userSchema.methods.correctPassword = async function (
  condidatPassword,
  userPassword
) {
  return await bcrypt.compare(condidatPassword, userPassword);
};

// Check if the password is changed after the JWT is sent
userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    let changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // console.log(changedTimeStamp, JWTTimeStamp);
    return changedTimeStamp > JWTTimeStamp;
  }
  return false;
};

// Reset Password Functionalities
userSchema.methods.createPasswordResetToken = function () {
  let resetToken = crypto.randomBytes(32).toString("hex");
  // ENCRYPTING RESETTOKEN
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  // console.log({ resetToken }, this.passwordResetToken);
  return resetToken;
};

//////////////////////// MANAGING PASSWORD //////////////////////

// Get Only Users With Active Account
userSchema.pre(/^find/, function (next) {
  // this.find({ active: {$ne : false} });
  this.find({ active: true });
  next();
});

userSchema.pre(/^find/, function () {
  this.populate({
    path: "project",
    select: "title",
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
