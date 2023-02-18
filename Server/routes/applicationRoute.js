let express = require("express");
let applicationControllers = require("../controllers/applicationControllers");
let router = express.Router();

// Start Files Upload Functionality
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: "./public/ProfilePictures",

//   filename: function (req, file, callback) {
//     let fileFormat = file.mimetype.split("/");
//     callback(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   console.log(file);
//   cb(null, true);
// };
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });
// End Files Upload Functionality

// @route GET
// @des : All Bac Alternance Applications
router.get("/", applicationControllers.getAllApplications);
router.get("/:applicationId", applicationControllers.getOneApplication);
// @route POST
// @des : Create New Bac Alternance Application
router.post(
  "/apply",

  applicationControllers.createNewApplication
);
// @route PATCH
// @des : Update  Bac Alternance Application
router.patch(
  "/update/:applicationId",
  applicationControllers.updateApplication
);
// @route DELETE
// @des : Delete  Bac Alternance Application
router.patch(
  "/delete/:applicationId",
  applicationControllers.deleteApplication
);

module.exports = router;
