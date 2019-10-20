const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  email: String,
  password: String,
  username: String,
  birthday: Date,
  name: Object,
  completed: Object,
  score: Number,
  achievements: Object,
  coursePercentages: Object
});

module.exports = mongoose.model("users", userSchema);
