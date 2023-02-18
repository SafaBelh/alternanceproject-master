let mongoose = require("mongoose");

let bacApplicationSchema = new mongoose.Schema({
  alternance: { type: String, default: "Bac" },
  phoneNumber: { type: String, required: [true, "Enter Your Phone Number!"] },
  status: { type: String, required: true, default: "Applied" },
  profilePicture: { type: String, required: true },
  bachelor: { type: String, required: true },
  BacMoyenne: { type: Number, required: true },
  MathsMark: { type: Number, required: true },
  ComputerScienceMark: { type: Number, required: true },
  EnglishMark: { type: Number, required: true },
});

const bacApplication = mongoose.model("bacApplication", bacApplicationSchema);

module.exports = bacApplication;
