const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");
let BacAlternance = require("../models/alternanceBac");

// Create New Application
exports.createNewBacApplication = catchAsync(async (req, res, next) => {
  let fileUrl = req.file.path.replace(/\\/g, "/");
  let status;
  if (
    req.body.MathsMark < 11 ||
    req.body.ComputerScienceMark < 14 ||
    req.body.EnglishMark < 16
  ) {
    status = "Rejected";
  }
  let doc = await BacAlternance.create({
    phoneNumber: req.body.phoneNumber,
    status: status,
    profilePicture: fileUrl,
    bachelor: req.body.bachelor,
    BacMoyenne: req.body.BacMoyenne,
    MathsMark: req.body.MathsMark,
    ComputerScienceMark: req.body.ComputerScienceMark,
    EnglishMark: req.body.EnglishMark,
  });
  res.status(201).json({ status: "Success", data: { data: doc } });
});
// Get All ( Alternance BAC ) Applications
exports.getAllBacApplications = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };

  // Filter Functionality
  const excludedFields = ["page", "limit", "sort", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let query = BacAlternance.find(queryObj);
  
  
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
exports.getOneBacApplication = catchAsync(async (req, res, next) => {
  let query = BacAlternance.findById(req.params.bacApplicationId);
  let doc = await query;
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }
  res.status(200).json({ status: "Success", data: doc });
});
// Update Application
exports.updateBacApplication = catchAsync(async (req, res, next) => {
  let updatedApplication = await BacAlternance.findOneAndUpdate(
    { _id: req.params.bacApplicationId },
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
exports.deleteBacApplication = catchAsync(async (req, res, next) => {
  let deletedApplicationId = req.params.applicationId;
  await BacAlternance.findByIdAndUpdate(deletedApplicationId, {
    active: false,
  });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});
