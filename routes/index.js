const express = require("express");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");


router = express.Router();

const isAuthenticatedOrReadOnly = (req, res, next) => {
  if (["GET", "HEAD", "OPTION"].includes(req.method))
    next();
  else {
    if (req.isAuthenticated()) {
      next();
    }
    else {
      res.sendStatus(404);
    }
  }
}

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.use("/users", isAuthenticated, userRoutes);
router.use("/auth", authRoutes);

module.exports = router;