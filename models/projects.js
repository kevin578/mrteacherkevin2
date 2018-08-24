const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
    rawURL: String,
    userId: String,
    userName: String,
    timeStamp: Number,
    subject: String,
    subjectURL: String,
    course: String,
    likes: Number,
    creativeScore: Number
})

module.exports = mongoose.model("projects", projectSchema);