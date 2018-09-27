const router = require("express").Router();
const mongoose = require("mongoose");
const Project = require("../models/projects");
const errorMessage = "Something went wrong";
const successMessage = "Successfully saved";

router.post("/api/addProject", (req, res)=> {
    if (!req.user.id) return;
    const {id, displayName } = req.user;
    const {subject, subjectURL, course, projectURL, projectTitle} = req.body;
    const savedProject = new Project({
        userId: id,
        userName: displayName,
        projectURL,
        projectTitle,
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

router.get("/api/getUserProjects", (req, res)=> {
    Project.find({userId: req.user.id}, (err, projects)=> {
        if (err) res.send(err);
        else res.send(projects);
    })

})

module.exports = router;