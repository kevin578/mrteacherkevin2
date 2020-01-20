const router = require("express").Router();
const sendEmail = require("../services/sendEmail");
var jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/api/sendContactEmail", (req, res) => {
  const { name, email, message } = req.query;
  const emailOptions = {
    data: {
      name,
      email,
      message
    },
    templateName: "message",
    fallbackText: `Name: ${name}, Email: ${email}, Message: ${message}`,
    subject: "Message from mrteacherkevin.com",
    sendTo: ["kevinbriggs1@gmail.com"]
  };

  sendEmail(emailOptions)
    .then(() => {
      res.send("Email successfully sent");
    })
    .catch(() => {
      res.send("Error sending email");
    });
});

router.post("/api/forgotPassword", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.send("Email not found");
  } else if (user.googleId) {
    res.send("Google account");
  } else {
    const link = createLink(user);
    const emailOptions = {
      data: {link},
      templateName: "passwordReset",
      fallbackText: `Click on the following link to reset your password: ${link}`,
      subject: "Password reset instructions",
      sendTo: [user.email]
    };

    sendEmail(emailOptions)
      .then(() => {
        res.send("Email successfully sent");
      })
      .catch(() => {
        res.send("Error sending email");
      });
  }
});

function createLink(user) {
  const token = jwt.sign({email: user.email }, user.password + user.updatedAt.$date);
  return `http://localhost:3000/resetpassword/${user.id}/${token}`;
}

module.exports = router;
