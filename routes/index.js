const express = require("express");
const userRoute = require("./userRoutes");


router = express.Router();

router.use("/user", userRoute);

module.exports = router;