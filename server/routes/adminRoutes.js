const router = require("express").Router();
const RecentActivity = require("../models/recentActivity");
const User = require("../models/user");
const { checkForAdmin } = require("../services/validateUser");

router.get("/api/getRecentActivity", checkForAdmin, async (req, res)=> {
  const activityList = await RecentActivity.find({}).sort({createdAt: -1}).limit(50);
  res.json(activityList); 
});

router.get("/api/getUsers", checkForAdmin, async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1}).select(["email", "createdAt", "userName"]);
  res.json(users);
});

router.get("/api/getUser", checkForAdmin, async (req, res)=> {
  const user = await User.find({userName: req.query.user});
  res.json(user);
});


module.exports = router;