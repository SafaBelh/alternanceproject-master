const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");
// let BacAlternance = require("../models/alternanceBac");
let BacForm = require("../models/BacForm");
// Create New Application
exports.createNewBacForm = catchAsync(async (req, res, next) => {
  //   let fileUrl = req.file.path.replace(/\\/g, "/");
  //   let status;
  //   if (
  //     req.body.MathsMark < 11 ||
  //     req.body.ComputerScienceMark < 14 ||
  //     req.body.EnglishMark < 16
  //   ) {
  //     status = "Rejected";
  //   }
  let doc = await await BacForm.create(req.body);
  res.status(201).json({ status: "Success", data: { data: doc } });
});
// Get All ( Alternance BAC ) Applications
exports.getAllBacForms = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };

  // Filter Functionality
  const excludedFields = ["page", "limit", "sort", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let query = BacForm.find(queryObj).populate("fields");

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
exports.getOneBacForm = catchAsync(async (req, res, next) => {
  let doc = BacForm.findById(req.params.bacFormId).populate("fields");
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }
  res.status(200).json({ status: "Success", data: doc });
});
// Update Application
exports.updateBacForm = catchAsync(async (req, res, next) => {
  let updatedApplication = await BacAlternance.findOneAndUpdate(
    { _id: req.params.bacFormId },
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
exports.deleteBacForm = catchAsync(async (req, res, next) => {
  let deletedApplicationId = req.params.bacFormId;
  await BacAlternance.findByIdAndUpdate(deletedApplicationId, {
    active: false,
  });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});
