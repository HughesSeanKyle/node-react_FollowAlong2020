// //vid 10 01:01
//  Test Route
// app.get('/', (req, res) => {
//     res.send({ test: 'changes' });
// });


package.jSon notes 17/10/2020
Also steps before deployment vid 12 && 13 @ 0:09
    Above diagram also in gitHub link
vid 12 08:40 - discussing engines setup
Same    09:00 - scripts section node index.js
        10:30 - gitignore

steps for first time  deployment vid 13 @0:44 

Vid 14
String Ids name of app to heroku
  Link to visit app
    https://vast-hamlet-90193.herokuapp.com/ 
|
Deployment target - git repo to push local server to
    https://git.heroku.com/vast-hamlet-90193.git

    ___Deploy app with git 02:30
        Add a remote repo to the current repo

Vid 18
Passport js complaints/issues 1:17
Passport Library components 3:15
Passport Documentation 5:31

LAST NOTE 19/10/2020


21/10/2020

Continue vid 26 - Google OAuth error - Boot up server again node index.js

vid 30
const keys = require('./config/keys'); file: passport.js

('./config/keys') - Looks in the same directory as the current file (passport.js) to correct add one more "." in front of /config ('../config/keys'). says go up one more directory then find config folder.


FOR NEXT SESSION!!!!! 23/10/2020

Start pushing code to gitHub
    CREATE A REPO