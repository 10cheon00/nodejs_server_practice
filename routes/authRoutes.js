const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");


const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/failed");
}

router.post("/login/local", authController.localLogin);
router.get("/login/google", authController.showGoogleLoginPage);
router.get("/login/google/redirect", authController.getRedirect);
router.get("/failed", authController.failed);
router.get("/success", authController.success);
router.get("/logout", authController.logOut);

module.exports = router;