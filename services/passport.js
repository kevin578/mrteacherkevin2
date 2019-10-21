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
  "local-signup",
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    function(req, email, password, done) {
      const passwordHash = bcrypt.hashSync(password, 8);
      new User({
        email: email,
        password: passwordHash,
        userName: req.query.userName
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

passport.use(
  "local-signin",
  new LocalStrategy(
    { usernameField: "userName", passReqToCallback: true },
    function(req, userName, password, done) {
      
      const findUserName = new Promise(resolve => {
        User.findOne({ userName }).then(user => {
          if (user) {
            return checkPassword(user);
          } else {
            resolve();
          }
        });
      });

      const findEmail = new Promise(resolve => {
        User.findOne({ email: userName }).then(user => {
          if (user) {
            return checkPassword(user);
          } else {
            resolve();
          }
        });
      });

      function checkPassword(user) {
        bcrypt.compare(password, user.password, function(err, res) {
          if (res) {
            return done(null, user);
          } else {
            return req.res.json({
              error: true,
              errorType: "password",
              errorMessage: "Incorrect Password"
            });
          }
        });
      }
      Promise.all([findEmail, findUserName]).then(() => {
        return req.res.json({
          error: true,
          errorType: "userName",
          errorMessage: "Username does not exist"
        });
      });
    }
  )
);
