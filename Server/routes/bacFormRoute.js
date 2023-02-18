let express = require("express");
let bacFromControllers = require("../controllers/bacFormControllers");
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
router.get("/", bacFromControllers.getAllBacForms);
router.get("/:bacFormId", bacFromControllers.getOneBacForm);
// @route POST
// @des : Create New Bac Alternance Application
router.post(
  "/apply",

  bacFromControllers.createNewBacForm
);
// @route PATCH
// @des : Update  Bac Alternance Application
router.patch("/update/:bacFormId", bacFromControllers.updateBacForm);
// @route DELETE
// @des : Delete  Bac Alternance Application
router.patch("/delete/:bacFormId", bacFromControllers.deleteBacForm);

module.exports = router;
