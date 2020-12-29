//In node projects, file called index.js by convention
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser'); // 1
const keys = require('./config/keys');

  // const authRoutes = require('.routes/authRoutes'); refactor v30
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
  });


const app = express();

app.use(bodyParser.json());
//maxAge - How long cookie can exist in browser in ms not s
//keys - Used to encrypt cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send("Welcome to home page!")
})

//we need to use express in order to use routes v30
  //authRoutes becomes a function that takes in app as an Arg
    //the module.exports makes this possible v30
// authRoutes(app); ref v30
require('./routes/authRoutes')(app);
  //require stmt above returns a function (authRoutes.js) v30
require('./routes/billingRoutes')(app);
  // Above basically saying require this route then execute the function that it exports. 

const PORT = process.env.PORT || 5000 //V12 04:45
//vid 10 06:44
app.listen(PORT, () => console.log('Connected to Server...'))



//ref === refactor

/*
// 1 - This is an express middleware - express middlewares are wired up to express by the app.use call
*/