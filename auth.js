const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");


passport.use("google", new GoogleStrategy(
  {
    clientID: "26448811228-nce5vtps4ctrm91vsjvds3lp555dlreq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: 'http://localhost:8000/auth/login/google/redirect',
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

passport.use("local", new LocalStrategy(
  {
    usernameField: "name",
    passwordField: "password",
  },
  (username, password, done) => {
    User.findByUsername(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      // this compare is not safe.
      // It should be secure by using other package.
      if (!user.password === password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
