const passport = require('passport'); //requiring original npm module


module.exports = (app) => { //v30 - exporting func from this file
    //app = express app object in index.js v30
  app.get(
      '/auth/google',
      passport.authenticate('google', { //google string part of GoogleStrategy
          scope: ['profile', 'email'] //What access we need in user profile
      })                                  //Google has more scope options
  );
  
  app.get(
      '/auth/google/callback',
       passport.authenticate('google'),
       (req, res) => {
            res.redirect('/surveys');
       }
);//google string ID'd by GoogleStrategy.

  app.get('/api/logout', (req, res) => {
      req.logout();//attached by passport
      res.redirect('/');
  });


  //2
  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
  });
};

/*
1. req.logout() is a function that is attached automatically to the request object by passport 

//2 This route will decide if the user is logged in or not. 
*/

