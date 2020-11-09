const recentActivity = require("../models/recentActivity");

const router = require("express").Router();
const RecentActivity = require("../models/recentActivity");

router.get("/api/getRecentActivity", async (req, res)=> {
  const activityList = await RecentActivity.find({});
  res.json(activityList);
})

module.exports = router;