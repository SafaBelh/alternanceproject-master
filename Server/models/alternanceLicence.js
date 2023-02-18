let mongoose = require("mongoose");

let licenceApplicationSchema = new mongoose.Schema({
  // userId: { type: String },
  alternance: { type: String, default: "Licence" },
  phoneNumber: { type: String, required: [true, "Enter Your Phone Number!"] },
  status: { type: String, default: "Applied" },
});

const licenceApplication = mongoose.model(
  "licenceApplication",
  licenceApplicationSchema
);

module.exports = licenceApplication;
