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
  completed: Object,
  score: Number,
  achievements: Object,
  coursePercentages: Object,
  votes: Object
}, { timestamps: true });




module.exports = mongoose.model("users", userSchema);
