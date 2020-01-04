const router = require("express").Router();
const sendEmail = require("../services/sendEmail");

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

module.exports = router;
