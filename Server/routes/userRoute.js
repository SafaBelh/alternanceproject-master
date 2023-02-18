let express = require("express");
let userControllers = require("./../controllers/userControllers");
let router = express.Router();
let authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.use(authController.protect);

router.patch("/updatePassword", authController.updatePassword);

/// OTHER ROUTERS
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser);

router.route("/:id").get(userControllers.getUser);
router.route("/deleteUser/:id").patch(userControllers.deleteUser);
module.exports = router;
