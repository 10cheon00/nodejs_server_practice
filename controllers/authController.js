const res = require("express/lib/response");
const passport = require("passport");


const routes = {};


routes.localLogin =
  passport.authenticate("local", {
    failureRedirect: "/auth/failed",
    successRedirect: "/auth/success"
  });

routes.showGoogleLoginPage = passport.authenticate("google", { scope: ["email", "profile"] });

routes.getRedirect =
  passport.authenticate("google", {
    failureRedirect: "/auth/failed",
    successRedirect: "/auth/success"
  });

routes.failed = (req, res) => {
  res.status(400).json("Failed to sign in");
}

routes.success = (req, res) => {
  res.json("Succes to sign in");
}

routes.logOut = (req, res) => {
  req.logOut((err) => {
    if (err) throw err;
  });
  res.redirect("/");
}

module.exports = routes;
