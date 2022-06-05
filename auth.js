const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: "26448811228-nce5vtps4ctrm91vsjvds3lp555dlreq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: 'http://localhost:8000/auth/google/redirect',
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

