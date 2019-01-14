const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
    projectURL: String,
    projectTitle: String,
    projectKey: String,
    userId: String,
    userName: String,
    timeStamp: Number,
    subject: String,
    subjectURL: String,
    course: String,
    votes: Object
})

module.exports = mongoose.model("projects", projectSchema);