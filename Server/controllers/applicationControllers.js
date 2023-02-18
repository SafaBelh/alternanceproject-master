const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");
let BacAlternance = require("../models/alternanceBac");
let Application = require("../models/application");
// Create New Application
exports.createNewApplication = catchAsync(async (req, res, next) => {
  //   let fileUrl = req.file.path.replace(/\\/g, "/");
  //   let status;
  //   if (
  //     req.body.MathsMark < 11 ||
  //     req.body.ComputerScienceMark < 14 ||
  //     req.body.EnglishMark < 16
  //   ) {
  //     status = "Rejected";
  //   }
  let doc = await (await Application.create(req.body)).populate("form");
  res.status(201).json({ status: "Success", data: { data: doc } });
});
// Get All ( Alternance BAC ) Applications
exports.getAllApplications = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };

  // Filter Functionality
  const excludedFields = ["page", "limit", "sort", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let query = Application.find(queryObj).populate("bacForm licenceForm");

  // Sorting Functionality
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  }
  const doc = await query;

  // Send Result
  res.status(200).json({
    result: doc.length,
    status: "Success",
    data: doc,
  });
});
// Get One ( Alternance BAC ) Application
exports.getOneApplication = catchAsync(async (req, res, next) => {
  // let query = BacAlternance.findById(req.params.applicationId).populate("form");
  let doc = await Application.findById(req.params.applicationId).populate(
    "bacForm licenceForm"
  );
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }
  res.status(200).json({ status: "Success", data: doc });
});
// Update Application
exports.updateApplication = catchAsync(async (req, res, next) => {
  let updatedApplication = await Application.findOneAndUpdate(
    { _id: req.params.applicationId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "Success",
    data: updatedApplication,
  });
});
// Delete Application
exports.deleteApplication = catchAsync(async (req, res, next) => {
  let deletedApplicationId = req.params.applicationId;
  await BacAlternance.findByIdAndUpdate(deletedApplicationId, {
    active: false,
  });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});
