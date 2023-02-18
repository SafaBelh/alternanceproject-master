let mongoose = require("mongoose");

let FormFieldsSchema = new mongoose.Schema({
  firstName: { type: String, required: true, default: "USER" },
  lastName: { type: String, required: true, default: "USER" },
  email: { type: String, required: true, default: "USERUSER@gmail.com" },
  phoneNumber: {
    type: String,
    required: [true, "Enter Your Phone Number!"],
    default: "50122080",
  },
  profilePicture: { type: String },
  resume: { type: String },
  motivationalLetter: { type: String },
  status: { type: String, default: "Applied" },
  bachelor: { type: String, required: true, default: "Mathématique" },
  BacMoyenne: { type: Number, required: true, default: "15.5" },
  MathsMark: { type: Number, required: true, default: "12" },
  ComputerScienceMark: { type: Number, required: true, default: "17.5" },
  EnglishMark: { type: Number, required: true, default: "18" },
});

const FromFields = mongoose.model("FromFields", FormFieldsSchema);

module.exports = FromFields;
