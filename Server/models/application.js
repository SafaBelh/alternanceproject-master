let mongoose = require("mongoose");

let ApplicationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  bacForm: [{ type: mongoose.Schema.ObjectId, ref: "BacForm" }],
  licenceForm: [{ type: mongoose.Schema.ObjectId, ref: "LicenceForm" }],
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
