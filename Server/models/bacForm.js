let mongoose = require("mongoose");

let BacFormSchema = new mongoose.Schema({
  // formId: { type: Number, default: 1 },
  type: { type: String, required: true, default: "bac" },
  firstName: { type: String, required: true, default: "USER" },
  lastName: { type: String, required: true, default: "USER" },
  email: { type: String, required: true, default: "USERUSER@gmail.com" },
  phoneNumber: {
    type: String,
    required: [true, "Enter Your Phone Number!"],
    default: "50122080",
  },
  profilePicture: { type: String, required: true },
  resume: { type: String, required: true },
  motivationalLetter: { type: String, required: true },
  status: { type: String, default: "Applied" },
  bachelor: { type: String, required: true, default: "Mathématique" },
  BacMoyenne: { type: Number, required: true, default: "15.5" },
  MathsMark: { type: Number, required: true, default: "12" },
  ComputerScienceMark: { type: Number, required: true, default: "17.5" },
  EnglishMark: { type: Number, required: true, default: "18" },
  // fields: [{ type: mongoose.Schema.ObjectId, ref: "FromFields" }],
});

const BacForm = mongoose.model("BacForm", BacFormSchema);

module.exports = BacForm;
