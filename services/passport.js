const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcryptjs");

require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
          name: profile.name
        }).save();
        done(null, user);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    function(req, email, password, done) {
      const passwordHash = bcrypt.hashSync(password, 8);
      new User({
        email: email,
        password: passwordHash,
        username: req.query.username
      })
        .save()
        .then(user => {
          done(null, user, {
            saved: true,
            message: "Saved"
          });
        });
    }
  )
);
