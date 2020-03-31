const passport = require("passport");

// think about using whitelist in the future

const urlWhitelist = ["/api/current_user"];
// function secureEndpoint(req, res, next) {
//   if (true) {
//     passport.authenticate("jwt", { session: false })
//   } else {
//     (req, res, nex )=> next(); 
//   }
// }

const secureEndpoint = passport.authenticate("jwt", { session: false });
//const secureEndpoint = (req, res, done )=> done(); 

exports.default = secureEndpoint;
