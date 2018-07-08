const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  name: Object,
  completed: Object,
  score: Number,
  achievements: Object
});

module.exports = mongoose.model("users", userSchema);
