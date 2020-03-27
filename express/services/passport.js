const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("users");
const bcrypt = require("bcryptjs");

require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id);
  // user._doc.authToken = jwt.sign({ email: user.email },'top_secret');
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
      const userInfo = {
        googleId: profile.id,
        displayName: profile.displayName,
        name: profile.name,
        email: profile._json.email
      };
      const config = {
        upsert: true,
        new: true
      };

      const user = await User.findOneAndUpdate(findUser, userInfo, config);
      done(null, user);
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
        userName: req.query.userName,
        birthMonth: req.query.month,
        birthYear: req.query.year
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
      User.findOne({ userName }).then(user => {
        if (user) {
          return checkPassword(user);
        } else {
          return req.res.json({
            error: true,
            errorType: "userName",
            errorMessage: "Username does not exist"
          });
        }
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
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "top_secret",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("authToken")
    },
    async (token, done) => {
      try {
        return done(null, token.email);
      } catch (error) {
        done(error);
      }
    }
  )
);
