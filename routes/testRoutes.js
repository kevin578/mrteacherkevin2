const router = require("express").Router();
const jest = require("jest");

router.post("/api/testCode", (req, res)=> {
    res.send("Receieved")
    //res.send(req.body)
})

module.exports = router;


// const options = {
//     projects: ['./client/src/tests'],
//     silent: false,
//   };
  
  
//   jest
//     .runCLI(options, options.projects)``
//     .then((success) => {
//       console.log(success.results.testResults[0]);
//     })
//     .catch((failure) => {
//       console.error(failure);
//     });