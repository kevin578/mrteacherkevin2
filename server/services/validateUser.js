const jwt = require("jsonwebtoken");
const User = require('../models/user');

function secureEndpoint(req, res, next) {
  let token;
  const errorObj = { success: false, msg: "Not authorized" };

  //check for auth token in cookies from the browser
  if (req && req.cookies && req.cookies["authToken"]) {
    token = req.cookies["authToken"];
  } // check for auth token in query params for api
  else if (req && req.query && req.query.authToken) {
    token = req.query.authToken;
  }
  // if token is not present then send an error
  if (!token) {
    return res.json(errorObj);
  }
  jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
    if (!req.user) res.json({success: false, msg: 'User info not present'})

    //check that email from the token is the same as the user
    if (decoded.email == req.user.email || decoded.email == req.query.email) {
      next();
    } else {
      res.json(errorObj);
    }
  });
}

async function isAdmin(req, res, next) {
  if (req.user && req.user.id) {
    const user = await User.find({email: req.user.email});
    if (user.admin || process.env.HARDCODED_ADMIN_USERS.includes(req.user.email)) {
      next();
    } else {
      res.status(403).send({
        message: "User is not admin",
      });
    }

  }
}

const checkForAdmin = [secureEndpoint, isAdmin];

exports.checkForAdmin = checkForAdmin;
exports.default = secureEndpoint;
