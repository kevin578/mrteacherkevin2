const mongoose = require("mongoose");
const { Schema } = mongoose;

const recentActivity = new Schema({
  userId: {
  type: Schema.Types.ObjectID,
  ref: "user"
  },
  category: String,
  description: String
}, { 
  timestamps: true,
  capped: {
    max: 500
  }
});

module.exports = mongoose.model("recentActivity", recentActivity);