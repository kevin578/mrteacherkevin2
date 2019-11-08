const mongoose = require("mongoose");
const { Schema } = mongoose;


// const userVotes = new Schema({
//   projectId: String,
//   icon: String
// })

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  email: String,
  password: String,
  userName: String,
  birthday: Date,
  name: Object,
  email: String,
  completed: Object,
  score: Number,
  achievements: Object,
  coursePercentages: Object,
  votes: Object
});




module.exports = mongoose.model("users", userSchema);
