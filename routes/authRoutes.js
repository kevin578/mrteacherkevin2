const router = require("express").Router();
const passport = require("passport");

function getCallbackURL() {
  if (process.env.NODE_ENV === "production") {
    return "https://mrteacherkevin.herokuapp.com/auth/google/callback";
  } else {
    // we are in development - return the dev keys!!!
    return "/auth/google/callback";
  }
}

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  getCallbackURL(),
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

module.exports = router;
