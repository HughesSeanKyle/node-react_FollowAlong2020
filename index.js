//In node projects, file called index.js by convention
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');
// const authRoutes = require('.routes/authRoutes'); refactor v30

mongoose.connect(keys.mongoURI);

const app = express();

//we need to use express in order to use routes v30
  //authRoutes becomes a function that takes in app as an Arg
    //the module.exports makes this possible v30
// authRoutes(app); ref v30
require('./routes/authRoutes')(app);
  //require stmt above returns a function (authRoutes.js) v30

const PORT = process.env.PORT || 5000 //V12 04:45
//vid 10 06:44
app.listen(PORT);



//ref === refactor