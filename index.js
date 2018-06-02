const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const router = require('express').Router();
const authRoutes = require('./routes/authRoutes');

require('./models/user')
require('./services/passport');

mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(cookieSession({
    maxAge:  30 /*days*/ * 24 /*hours*/ *  60 /*minutes*/ *  60 /*seconds*/ *  1000 /*milliseconds*/,
    keys: [process.env.COOKIE_KEY]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);



const PORT = process.env.PORT || 5000

app.listen(PORT);