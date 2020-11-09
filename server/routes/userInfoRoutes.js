const router = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../models/user");
const passport = require("passport");
const validateUser = require("../services/validateUser").default;
const errorMessage = "Something went wrong";
const successMessage = "Successfully saved";
const RecentActivity = require("../models/recentActivity");

router.get("/api/getStateFromDatabase", (req, res) => {
  const id = req.user;
  Users.findById(id, (err, user) => {
    if (err) {
      res.send(errorMessage);
    } else {
      res.json(user);
    }
  });
});

router.put("/api/editCompletedPages", validateUser, async (req, res) => {
  const id = req.user;
  const subject = req.body.subjectURL;
  const pageKey = req.body.pageKey;
  const stateCopy = req.body.store == null ? {} : req.body.store;

  if (subject in stateCopy && !stateCopy[subject].includes(pageKey)) {
    stateCopy[subject].push(pageKey);
  } else if (!(subject in stateCopy)) {
    stateCopy[subject] = [pageKey];
  }
  
  Users.findByIdAndUpdate(id, { completed: stateCopy }, async (err, data) => {
    if (err) res.send(errorMessage);
    else {
      RecentActivity.create({
        id,
        category: "Completed Page",
        description: `${req.user.userName} completed ${req.body.subjectURL}: ${req.body.pageKey}`
      });
      res.send(successMessage);
    } 
  });
});

router.put("/api/editAchievements", validateUser, (req, res) => {
  const subject = req.body.subject;
  const ranking = req.body.ranking;
  const stateCopy = req.body.store == null ? {} : req.body.store;

  if (subject in stateCopy && !stateCopy[subject].includes(ranking)) {
    stateCopy[subject].push(ranking);
  } else if (!(subject in stateCopy)) {
    stateCopy[subject] = [ranking];
  }

  Users.findByIdAndUpdate(
    req.user.id,
    { achievements: stateCopy },
    (err, data) => {
      if (err) res.send(errorMessage);
      else res.send(successMessage);
    }
  );
});

router.put("/api/setScore", validateUser, (req, res) => {
  Users.findByIdAndUpdate(
    req.user.id,
    {
      score: req.body.score
    },
    (err, data) => {
      if (err) res.send(errorMessage);
      else res.send(successMessage);
    }
  );
});

router.put("/api/setCoursePercentage", validateUser, (req, res) => {
  const course = req.body.subjectURL;
  const percent = req.body.percentage;
  var setter = { $set: {} };
  setter.$set["coursePercentages." + course] = percent;

  Users.findByIdAndUpdate(req.user.id, setter, (err, data) => {
    if (err) res.send(errorMessage);
    else res.send(successMessage);
  });
});

router.get("/api/getCoursePercentages", validateUser, (req, res) => {
    Users.findById(req.user.id, (err, data) => {
      if (err) res.send(errorMessage);
      else res.send(data.coursePercentages);
    });
});

module.exports = router;
