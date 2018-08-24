const router = require("express").Router();
const mongoose = require("mongoose");
const Project = require("../models/projects");
const errorMessage = "Something went wrong";
const successMessage = "Successfully saved";

router.post("/api/addProject", (req, res)=> {
    if (!req.user.id) return;
    const {id, displayName } = req.user;
    const {subject, subjectURL, course, rawURL} = req.body;
    const savedProject = new Project({
        userId: id,
        userName: displayName,
        rawURL,
        subject,
        subjectURL,
        course,
        timeStamp: Date.now()
    })
    
    savedProject.save(function (err) {
        if (err) return handleError(err);
        // saved!
      });
})

module.exports = router;