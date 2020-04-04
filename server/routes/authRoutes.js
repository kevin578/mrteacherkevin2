const mongoose = require("mongoose");
const User = mongoose.model("users");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateUser = require("../services/validateUser").default;


router.get("/api/sanityCheck", (req, res)=> {
  res.send("Everything is running.");
});

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
  if (req.user) {
      res.cookie("authToken", jwt.sign({ email: req.user.email }, process.env.JWT_KEY));
  }
  res.send(req.user);
});

router.get("/api/logout", (req, res) => {
  res.clearCookie("authToken");
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
  const checkUsername = await User.findOne({ userName: req.query.userName });
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
  user.update({ password: newPasswordHash }).then(() => {
    res.json({
      success: true,
      message: "Password changed"
    });
  });
});

router.post("/api/resetPassword", async (req, res) => {
  const decodedJWT = jwt.verify(req.body.jwt, process.env.JWT_KEY);
  const { id, oldPassword } = decodedJWT;
  const user = await User.findById(id);
  const newPasswordHash = await bcrypt.hashSync(req.body.password, 8);
  if (oldPassword != user.password) {
    res.json({ sucess: false, message: "Link has expired" });
  }
  user.update({ password: newPasswordHash }).then(() => {
    res.json({
      success: true,
      message: "Password changed"
    });
  });
});

router.post("/api/setUsernameAndBirthday", validateUser, async (req, res)=> {
  const {id, month, year, userName} = req.query;
  const userNameExists = await User.findOne({userName});
  if (userNameExists) {
    res.json({success: false, msg: "Username already exists"})
  }
  if (month == "Month" || year == "Year") {
    res.json({success: false, msg: "Enter a valid birthday"})
  }
  let user = await User.findById(id);
  user.userName = userName;
  user.birthMonth = month;
  user.birthYear = year;
  await user.save()
  .catch(()=> {
    res.json({succes: false, msg: "Error saving information"});
  });
  res.send({success: true, msg: "Successfully saved", user});
});

module.exports = router;
