const router = require("express").Router();
if (typeof jest == 'undefined') {
    var jest = require("jest");
}


router.post("/api/testCode", (req, res)=> {
    var testVariable = require('./../services/testVariable/');
    testVariable = req.body.tests
    const options = {
        projects: ['./services/tests/'],
        silent: false,
        testNamePattern: "should",
      };
      jest
        .runCLI(options, options.projects)
        .then((success) => {
          //console.log(success.results.testResults[0]);
        })
        .catch((failure) => {
          console.error(failure);
        });

})

module.exports.router = router;

