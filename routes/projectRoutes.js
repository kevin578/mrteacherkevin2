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
        projectKey,
        course,
        timeStamp: Date.now()
    })
    
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const update = {projectURL, projectTitle, course, timeStamp: Date.now()}
    Project.findOneAndUpdate({userId: id, subjectURL}, update, options, (err, data)=> {
        if (err) res.send(errorMessage);
        else res.send(successMessage);
    })

    // savedProject.save(function (err) {
    //     if (err) return handleError(err);
    //     // saved!
    //   });
})

router.get("/api/getUserProjects", (req, res)=> {
    Project.find({userId: req.user.id}, (err, projects)=> {
        if (err) res.send(err);
        else res.send(projects);
    })

})

module.exports = router;