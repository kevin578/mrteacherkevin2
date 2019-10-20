const mongoose = require("mongoose");
const User = mongoose.model("users");
const router = require("express").Router();
const passport = require("passport");
const validator = require("email-validator");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => res.redirect("/")
);

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.post(
  "/api/login-email",
  validateLocalRequest,
  passport.authenticate("local", {}),
  (req, res) => {
    res.send("User saved in database");
  }
);

async function validateLocalRequest(req, res, next) {

  //check for valid email
  if (!validator.validate(req.query.email)) {
    return res.json({
      error: true,
      invalidInput: "email",
      errorMessage: "Please enter a valid email."
    });
  }

  //check if email already exists in database
  const checkEmail = await User.findOne({ email: req.query.email });
  if (checkEmail) {
    return res.json({
      error: true,
      invalidInputType: "email",
      errorMessage: "Email already in use."
    });
  }

  //check if username already exists
  const checkUsername = await User.findOne({ username: req.query.username });
  if (checkUsername) {
    return res.json({
      error: true,
      invalidInputType: "username",
      errorMessage: "Username already in use."
    });
  }
  next();
}

module.exports = router;
