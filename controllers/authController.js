const passport = require("passport");


const showGoogleLoginPage = passport.authenticate("google", { scope: ["email", "profile"] });


const getRedirect =
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/auth/log"
  });


const getLog = (req, res, next) => {
  res.send(req.user);
  next();
}

const logOut = (req, res) => {
  req.logOut((err) => {
    if (err) throw err;
  });
  res.redirect("/");
}

module.exports = {
  showGoogleLoginPage,
  getRedirect,
  getLog,
  logOut
}