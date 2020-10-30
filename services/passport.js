const passport = require('passport');
    //Has many modules but we only care about strategy mod vid 19 @4:53
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys');

//pull user model out of mongoose
  //One arg = fetch model, Two args = load model in (e.g userSchema).
const User = mongoose.model('users'); // <=== User = Model Class

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,          //Arg1:Obj
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
          new User({ googleId: profile.id }).save() //Create new instance of user and save to MongoDb
      }
    )
  );

//vid 30 not exporting any code from here
      //just want to make sure code is being used - see require stmt in index.js

