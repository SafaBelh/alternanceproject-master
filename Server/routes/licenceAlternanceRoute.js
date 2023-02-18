let express = require("express");
let alternanceLicenceControllers = require("../controllers/alternanceLicenceControllers");
let router = express.Router();

// Start Files Upload Functionality
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./public/ProfilePictures",

  filename: function (req, file, callback) {
    let fileFormat = file.mimetype.split("/");
    callback(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  },
});
const fileFilter = (req, file, cb) => {
  // console.log(file);
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    console.log(file);
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
// End Files Upload Functionality

// @route GET
// @des : All Licence Alternance Applications
router.get("/", alternanceLicenceControllers.getAllLicenceApplications);
router.get(
  "/:licenceApplicationId",
  alternanceLicenceControllers.getOneLicenceApplication
);
// @route POST
// @des : Create New Licence Alternance Application
router.post(
  "/apply",
  upload.single("profilePicture"),
  alternanceLicenceControllers.createNewLicenceApplication
);
// @route PATCH
// @des : Update  Licence Alternance Application
router.patch(
  "/update/:licenceApplicationId",
  alternanceLicenceControllers.updateLicenceApplication
);
// @route DELETE
// @des : Delete  Bac Alternance Application
router.patch(
  "/delete/:licenceApplicationId",
  alternanceLicenceControllers.deleteLicenceApplication
);

module.exports = router;
