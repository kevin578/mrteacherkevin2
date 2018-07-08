const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

require("dotenv").config();

function getCallbackURL() {
  if (process.env.NODE_ENV === "production") {
    return "https://mrteacherkevin.herokuapp.com/auth/google/callback";
  } else {
    return "/auth/google/callback";
  }
}


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
      callbackURL: getCallbackURL(),
      proxy: true
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
