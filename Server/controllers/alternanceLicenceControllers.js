const AppError = require("../utils/appError");
let catchAsync = require("../utils/catchAsync");
let LicenceAlternance = require("../models/alternancelicence");

// Get All ( Alternance LICENCE ) Application
exports.getAllLicenceApplications = catchAsync(async (req, res, next) => {
  const doc = await LicenceAlternance.find({});
  // console.log(Job);

  // Send Result
  res.status(200).json({
    result: doc.length,
    status: "Success",
    data: doc,
  });
});
// Get One ( Alternance LICENCE ) Application
exports.getOneLicenceApplication = catchAsync(async (req, res, next) => {
  let query = LicenceAlternance.findById(req.params.licenceApplicationId);
  let doc = await query;
  if (!doc) {
    return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
  }

  res.status(200).json({ status: "Success", data: doc });
});
// Create New Application
exports.createNewLicenceApplication = catchAsync(async (req, res, next) => {
  let doc = await LicenceAlternance.create(req.body);
  res.status(201).json({ status: "Success", data: { data: doc } });
});
// Update Application
exports.updateLicenceApplication = catchAsync(async (req, res, next) => {
  let updatedApplication = await LicenceAlternance.findOneAndUpdate(
    { _id: req.params.licenceApplicationId },
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
exports.deleteLicenceApplication = catchAsync(async (req, res, next) => {
  let deletedApplicationId = req.params.applicationId;
  await LicenceAlternance.findByIdAndUpdate(deletedApplicationId, {
    active: false,
  });
  res.status(200).json({
    status: "Success",
    data: null,
  });
});
