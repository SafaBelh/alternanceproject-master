let express = require("express");
let alternanceBacControllers = require("../controllers/alternanceBacControllers");
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
  console.log(file);
  cb(null, true);
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
// @des : All Bac Alternance Applications
router.get("/", alternanceBacControllers.getAllBacApplications);
router.get("/:bacApplicationId", alternanceBacControllers.getOneBacApplication);
// @route POST
// @des : Create New Bac Alternance Application
router.post(
  "/apply",
  upload.single("profilePicture"),
  alternanceBacControllers.createNewBacApplication
);
// @route PATCH
// @des : Update  Bac Alternance Application
router.patch(
  "/update/:bacApplicationId",
  alternanceBacControllers.updateBacApplication
);
// @route DELETE
// @des : Delete  Bac Alternance Application
router.patch(
  "/delete/:bacApplicationId",
  alternanceBacControllers.deleteBacApplication
);

module.exports = router;
