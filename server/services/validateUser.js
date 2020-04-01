const jwt = require("jsonwebtoken");

// const secureEndpointstList = [

// ];


function secureEndpoint(req, res, next) {

  let token;
  const errorObj = {success: false, msg: "Not authorized"}

  //check for auth token in cookies from the browser
  if (req && req.cookies && req.cookies['authToken']) {
    token = req.cookies['authToken'];
  } // check for auth token in query params for api 
  else if (req && req.query && req.query.authToken) {
    token = req.query.authToken;
  } 
  // if token is not present then send an error
  if (!token) {
    return res.json(errorObj);
  }
  jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
    //check that email from the token is the same as the user
    if (decoded.email == req.user.email || decoded.email == req.query.email) {
      next()
    } else {
      res.json(errorObj)
    }
  });
}

exports.default = secureEndpoint;
