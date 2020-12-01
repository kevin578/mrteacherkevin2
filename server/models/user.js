const mongoose = require("mongoose");
const { Schema } = mongoose;


// const userVotes = new Schema({
//   projectId: String,
//   icon: String
// })

const user = new Schema({
  googleId: String,
  displayName: String,
  email: String,
  password: String,
  userName: String,
  birthMonth: String,
  birthYear: String,
  name: Object,
  completed: Object,
  score: Number,
  achievements: Object,
  coursePercentages: Object,
  votes: Object,
  admin: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model("users", user);
