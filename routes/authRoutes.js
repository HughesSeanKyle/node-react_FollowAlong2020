const passport = require('passport'); //requiring original npm module



module.exports = (app) => { //v30 - exporting func from this file
    //app = express app object in index.js v30
  app.get(
      '/auth/google',
      passport.authenticate('google', { //google string part of   GoogleStrategy
          scope: ['profile', 'email'] //What access we need in user profile
      })                                  //Google has more scope options
  );
  
  app.get('/auth/google/callback', passport.authenticate('google'));//google string ID'd by GoogleStrategy.
};