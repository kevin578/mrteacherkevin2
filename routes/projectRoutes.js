const router = require("express").Router();
const mongoose = require("mongoose");
const Project = require("../models/projects");
const errorMessage = "Something went wrong";
const successMessage = "Successfully saved";

router.post("/api/addProject", (req, res)=> {
    if (!req.user.id) return;
    const {id, displayName } = req.user;
    const {subject, subjectURL, course, projectURL, projectTitle, projectKey} = req.body;    
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const update = {
        userId: id,
        userName: displayName,
        projectURL,
        projectTitle,
        subject,
        subjectURL,
        projectKey,
        course,
        timeStamp: Date.now()
    }
    Project.findOneAndUpdate({userId: id, subjectURL}, update, options, (err, data)=> {
        if (err) res.send(errorMessage);
        else res.send(successMessage);
    })
})

router.get("/api/getUserProjects", (req, res)=> {
    if (!req.user) {
        res.send("Not Logged in")
    }
    else {
        Project.find({userId: req.user.id}, (err, projects)=> {
            if (err) res.send(err);
            else res.json(projects);
        })
    }


})

router.get("/api/getProjectType/:subjectURL", (req, res)=> {
    const {subjectURL} = req.params;
    Project.find({subjectURL}, (err, projects)=> {
        if (err) res.send(err);
        else res.json(projects);
    })
})

module.exports = router;