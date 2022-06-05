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

router.use("/users", isAuthenticatedOrReadOnly, userRoutes);
router.use("/auth", authRoutes);

module.exports = router;