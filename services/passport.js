const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

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
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    async (accessToken, refreshToken, profile, done) => {
 
      const findUser = {
        googleId: profile.id
      }
      const userInfo = {
        googleId: profile.id,
        displayName: profile.displayName,
        name: profile.name,
        email: profile._json.email
      }
      const config = {
        upsert: true, 
        new: true
      }

      const user = await User.findOneAndUpdate(findUser, userInfo, config);
      console.log(user);
      done(null, user);
    }
  )
);
