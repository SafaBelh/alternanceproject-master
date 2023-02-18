let catchAsync = require("./../utils/catchAsync");
let AppError = require("./../utils/appError");
// const APIFeatures = require("../utils/apiFeatures");

// DeleteOne
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.findOneAndDelete({ _id: req.params.id });
    if (!doc) {
      return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
    }
    res
      .status(200) // CHANGE TO 204 ( NO-CONTENT)
      .json({
        status: "Success",
        //data : null ,
        message: `DOCUMENT With Id = ${req.params.id} Was Deleted Successfully !`,
      });
  });

// UpdateOne
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
    }
    res.status(200).json({ status: "Success", data: { data: doc } });
  });

// CreateOne
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.create(req.body);
    res.status(201).json({ status: "Success", data: { data: doc } });
  });

// Get One
exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    let doc = await query;
    if (!doc) {
      return next(new AppError(`NO DOCUMENT FOUND WITH THAT ID ! `, 404));
    }

    res.status(200).json({ status: "Success", data: doc });
  });

//Get All 
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To Allow For Nested GET reviews on tour
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };
    // // EXECUTE QUERY
    // const features = new APIFeatures(Model.find(filter), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    const doc = Model.find({});

    // Send Result
    res.status(200).json({
      result: doc.length,
      status: "Success",
      data: doc,
    });
  });
