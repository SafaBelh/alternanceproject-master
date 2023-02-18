const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");
// let BacAlternance = require("../models/alternanceBac");
let LicenceForm = require("../models/licenceForm");
// Create New Application
exports.createNewLicenceForm = catchAsync(async (req, res, next) => {
  //   let fileUrl = req.file.path.replace(/\\/g, "/");
  //   let status;
  //   if (
  //     req.body.MathsMark < 11 ||
  //     req.body.ComputerScienceMark < 14 ||
  //     req.body.EnglishMark < 16
  //   ) {
  //     status = "Rejected";
  //   }
  let doc = await LicenceForm.create(req.body);
  res.status(201).json({ status: "Success", data: { data: doc } });
});
// Get All ( Alternance BAC ) Applications
exports.getAllLicenceForm = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };

  // Filter Functionality
  const excludedFields = ["page", "limit", "sort", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let query = LicenceForm.find(queryObj).populate("fields");

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
exports.getOneLicenceForm = catchAsync(async (req, res, next) => {
  let query = LicenceForm.findById(req.params.licenceFormId).populate("fields");
  let doc = await query;
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }
  res.status(200).json({ status: "Success", data: doc });
});
// Update Application
exports.updateLicenceForm = catchAsync(async (req, res, next) => {
  let updatedApplication = await LicenceForm.findOneAndUpdate(
    { _id: req.params.licenceFormId },
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
exports.deleteLicenceForm = catchAsync(async (req, res, next) => {
  let deletedApplicationId = req.params.licenceFormId;
  await LicenceForm.findByIdAndUpdate(deletedApplicationId, {
    active: false,
  });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});
