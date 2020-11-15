const router = require("express").Router();
const RecentActivity = require("../models/recentActivity");
const User = require("../models/user");

router.get("/api/getRecentActivity", async (req, res)=> {
  const activityList = await RecentActivity.find({}).limit(50);
  res.json(activityList);
});

router.get("/api/getUsers", async (req, res)=> {
  const users = await User.find({}).select(["email", "createdAt", "userName"]);
  res.json(users);
});

module.exports = router;