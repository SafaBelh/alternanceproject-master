const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");

// let User = require("../models/userModel");
let Job = require("../models/jobModel");

let factory = require("./handlerFactory");

// Function : Filtred Out Uwanted Fields Names That Are Not Allowed To Be Updated
// let filterObj = (Obj, ...allowedFields) => {
//   let newObj = {};
//   Object.keys(Obj).forEach((el) => {
//     if (allowedFields.includes(el)) newObj[el] = Obj[el];
//   });
//   return newObj;
// };

// exports.getAllJobs = factory.getAll(Job);
exports.getAllJobs = catchAsync(async (req, res, next) => {
  const doc = await Job.find({});
  // console.log(Job);

  // Send Result
  res.status(200).json({
    result: doc.length,
    status: "Success",
    data: doc,
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  // // 1) Create Error If User Posts Password
  // if (req.body.password || req.body.confirmPassword)
  //   return next(new AppError("This Route Is Not For Password Updates ! ", 400));
  // // 2) Filtred Out Uwanted Fields Names That Are Not Allowed To Be Updated
  // let filtredBody = filterObj(req.body, "name", "email");
  // // 3) Update User Doc
  // let updatedUser = await User.findOneAndUpdate(req.user.id, filtredBody, {
  //   new: true,
  //   runValidators: true,
  // });
  // res.status(200).json({
  //   status: "Success",
  //   data: updatedUser,
  // });
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  // let deletedUserId = req.params.id;
  // await User.findByIdAndUpdate(deletedUserId, { active: false });
  // res.status(200).json({
  //   status: "Success",
  //   data: null,
  // });
});

exports.createNewJob = catchAsync(async (req, res, next) => {
  let doc = await Job.create(req.body);
  res.status(201).json({ status: "Success", data: { data: doc } });
});
exports.getOneJob = catchAsync(async (req, res, next) => {
  let query = Job.findById(req.params.jobId);
  // if (popOptions) query = query.populate(popOptions);
  let doc = await query;
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }

  res.status(200).json({ status: "Success", data: doc });
});
