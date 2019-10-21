const mongoose = require("mongoose");
const User = mongoose.model("users");
const router = require("express").Router();
const passport = require("passport");

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
  "/api/signin-email",
  passport.authenticate("local-signin", {}),
  (req, res) => {
    res.send("User session initiated");
  }
);

router.post(
  "/api/signup-email",
  validateLocalRequest,
  passport.authenticate("local-signup", {}),
  (req, res) => {
    res.send("User saved in database");
  }
);

async function validateLocalRequest(req, res, next) {
  //check if email already exists in database
  const checkEmail = await User.findOne({ email: req.query.email });
  if (checkEmail) {
    return res.json({
      error: true,
      errorType: "email",
      errorMessage: "Email already in use."
    });
  }

  //check if username already exists
  const checkUsername = await User.findOne({ username: req.query.userName });
  if (checkUsername) {
    return res.json({
      error: true,
      errorType: "userName",
      errorMessage: "Username already in use."
    });
  }
  next();
}

module.exports = router;
