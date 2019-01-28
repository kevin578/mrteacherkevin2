const mongoose = require("mongoose");
const { Schema } = mongoose;


// const userVotes = new Schema({
//   projectId: String,
//   icon: String
// })

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  name: Object,
  completed: Object,
  score: Number,
  achievements: Object,
  coursePercentages: Object,
  votes: Object
});




module.exports = mongoose.model("users", userSchema);
