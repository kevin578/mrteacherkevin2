const router = require("express").Router();
const mongoose = require("mongoose");
const Project = require("../models/projects");
const passport = require('passport');
const User = require("../models/user");
const errorMessage = "Something went wrong";
const successMessage = "Successfully saved";
const validateUser = require("../services/validateUser").default;

router.post("/api/addProject", validateUser, (req, res) => {
  if (!req.user.id) return;
  const { id, displayName } = req.user;
  const {
    subject,
    subjectURL,
    course,
    projectURL,
    projectTitle,
    projectKey
  } = req.body;
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
  };
  Project.findOneAndUpdate(
    { userId: id, subjectURL },
    update,
    options,
    (err, data) => {
      if (err) res.send(errorMessage);
      else res.send(successMessage);
    }
  );
});

router.get("/api/getUserProjects", validateUser, (req, res) => {
  if (!req.user) {
    res.send("Not Logged in");
  } else {
    Project.find({ userId: req.user.id }, (err, projects) => {
      if (err) res.send(err);
      else res.json(projects);
    });
  }
});

router.get("/api/getProjectType/:subjectURL", (req, res) => {
  const { subjectURL } = req.params;
  Project.find({ subjectURL }, (err, projects) => {
    if (err) res.send(err);
    else res.json(projects);
  });
});

router.get("/api/getProjectVotes", (req, res) => {
  const { id } = req.query;
  Project.findById(id, (err, project) => {
    if (err) res.send(err);
    else res.json(project.votes);
  });
});

router.get("/api/getUserSelectedIcons", validateUser,(req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) res.send(err);
    else res.json(user.votes);
  });
});

router.post("/api/changeProjectVotes", validateUser, async (req, res) => {
  const { voteCount, selectedIcon, id, user } = req.body;
  const projectUpdateString = `votes.${selectedIcon}`;
  const userUpdateString = `votes.${id}`;

  const changeVoteCounts = new Promise((resolve, reject) => {
    Project.findOneAndUpdate(
      { _id: id },
      { [projectUpdateString]: voteCount },
      (err, response) => {
        if (err) {
          res.send(err);
          return reject();
        }
        resolve();
      }
    );
  });

  const changeVoteIcon = new Promise((resolve, reject) => {
    var setter = { $set: {} };
    setter.$set[`votes.${id}.icon`] = selectedIcon;
    User.findOneAndUpdate(
      { _id: user },
      setter,
      { upsert: true, new: true },
      (err, response) => {
        if (err) {
          res.send(err);
          return reject();
        }
        resolve();
      }
    );
  });

  await Promise.all([changeVoteCounts, changeVoteIcon]);
  res.send("Saved");
});

module.exports = router;
