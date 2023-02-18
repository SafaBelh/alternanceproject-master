let mongoose = require("mongoose");

let LicenceFormSchema = new mongoose.Schema({
  //   formId: { type: Number, default: 2 },
  firstName: { type: String, required: true, default: "USER" },
  lastName: { type: String, required: true, default: "USER" },
  email: { type: String, required: true, default: "USERUSER@gmail.com" },
  phoneNumber: {
    type: String,
    required: [true, "Enter Your Phone Number!"],
    default: "50122020",
  },
  type: { type: String, required: true, default: "licence" },
  status: { type: String, default: "Applied" },
  profilePicture: { type: String, required: true },
  resume: { type: String, required: true },
  motivationalLetter: { type: String, required: true },
  //   fields: [{ type: mongoose.Schema.ObjectId, ref: "FromFields" }],
});

const LicenceForm = mongoose.model("LicenceForm", LicenceFormSchema);

module.exports = LicenceForm;
