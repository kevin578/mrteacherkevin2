const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const router = require("express").Router();
require("./models/user");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const userInfoRoutes = require("./routes/userInfoRoutes");
const projectRoutes = require("./routes/projectRoutes");
const testRoutes = require("./routes/testRoutes");
const emailRoutes = require("./routes/emailRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cookieSession({
    maxAge:
      30 /*days*/ *
      24 /*hours*/ *
      60 /*minutes*/ *
      60 /*seconds*/ *
      1000 /*milliseconds*/,
    keys: [process.env.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use(userInfoRoutes);
app.use(projectRoutes);
app.use(emailRoutes);
app.use(testRoutes.router);


if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
