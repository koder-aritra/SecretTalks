const express = require("express");

const authController = require("../controllers/authController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/recoverpass").post(authController.recoverPassword);
router
  .route("/getuserdetails")
  .post(verifyToken, authController.getUserDetails);

module.exports = router;
