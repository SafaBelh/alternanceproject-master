let validator = require("validator");

let mongoose = require("mongoose");
// const AppError = require("../utils/appError");

let jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  
});

// Get Only Users With Active Account
// userSchema.pre(/^find/, function (next) {
//   // this.find({ active: {$ne : false} });
//   this.find({ active: true });
//   next();
// });

// userSchema.pre(/^find/, function () {
//   this.populate({
//     path: "project",
//     select: "title",
//   });
// });

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
  