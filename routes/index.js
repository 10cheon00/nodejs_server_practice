const express = require("express");
const userRoute = require("./userRoutes");


router = express.Router();

router.use("/users", userRoute);

module.exports = router;