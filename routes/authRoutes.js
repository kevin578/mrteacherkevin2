const mongoose = require("mongoose");
const User = mongoose.model("users");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

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

router.post("/api/change-password", async (req, res) => {
  const { email, currentPassword, newPassword } = req.query;
  const user = await User.findOne({ email });
  const passwordMatches = await bcrypt.compare(currentPassword, user.password);
  if (!passwordMatches) {
    res.json({
      success: false,
      message: "Incorrect password"
    });
  }
  const newPasswordHash = await bcrypt.hashSync(newPassword, 8);
  user
    .update({ password: newPasswordHash })
    .then(() => {
      res.json({
        success: true,
        message: "Password changed"
      });  
    });
});

module.exports = router;
