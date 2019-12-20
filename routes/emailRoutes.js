const router = require("express").Router();
const sendEmail = require("../services/sendEmail");

router.post("/api/sendContactEmail", (req, res) => {
  sendEmail(req.query.name, req.query.email, req.query.message)
    .then(() => {
      res.send("Email successfully sent");
    })
    .catch(() => {
      res.send("Error sending email");
    });
});

module.exports = router;
