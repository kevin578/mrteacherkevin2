const mongoose = require("mongoose");
const { Schema } = mongoose;

const votesSchema = new Schema({
    wellDone: {type: Number, default: 0},
    creative: {type: Number, default: 0},
    fun: {type: Number, default: 0},
})


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
    votes: {type: votesSchema, default: votesSchema}
});

module.exports = mongoose.model("projects", projectSchema);