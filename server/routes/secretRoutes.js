const express = require("express");

const secretController = require("../controllers/secretController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router
  .route("/")
  .post(verifyToken, secretController.addSecret)
  .get(secretController.getSecrets);

module.exports = router;
