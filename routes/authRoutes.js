const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");


router.get("/google", authController.showGoogleLoginPage);
router.get("/google/redirect", authController.getRedirect);
router.get("/log", authController.getLog);
router.get("/logout", authController.logOut);

module.exports = router;