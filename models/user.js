const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    completed: Object,
    score: Number,
    achievements: Object
});

module.exports = mongoose.model('users', userSchema);

