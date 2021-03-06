const passport = require('passport');
    //Has many modules but we only care about strategy mod vid 19 @4:53
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys');

//pull user model out of mongoose
  //One arg = fetch model, Two args = load model in (e.g userSchema).
const User = mongoose.model('users'); // <=== User = Model Class

//setting id as cookie in user’s browser 
passport.serializeUser((user, done) => {
  done(null, user.id); //not profile id but id created by mongo
});

//convert user id in cookie back to user model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,          //Arg1:Obj
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', 
      proxy: true // Bypass the requirement for https
    }, 
    async (accessToken, refreshToken, profile, done) => {
      //find googleiD in DB equal to profile id from google during auth
        const existingUser = await User.findOne({ googleId: profile.id })
        
        if (existingUser) {
          //We already have a record with the given profile ID
          done(null, existingUser);
        } else {
          //We don't have a user record with this ID, make new record
            //Creates new model instance
          const user = await new User({ googleId: profile.id }).save() //Create new instance of user & save to MongoDb
          done(null, user);
        }
      }
    )
  );

//vid 30 not exporting any code from here
      //just want to make sure code is being used - see require stmt in index.js

//V41 - Anytime db is queried an asynchronous action is initiated.

