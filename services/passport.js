const passport = require('passport');
    //Has many modules but we only care about strategy mod vid 19 @4:53
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');


passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,          //Arg1:Obj
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {//
      
      }
    )
  );

//vid 30 not exporting any code from here
      //just want to make sure code is being used - see require stmt in index.js

