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


Vid 31 23/10/2020
    Http is stateless.
    Cookie-based authentication

Vid48 11/03/2020
app.use - wiring up middlewares - each of them @1:00

middleware are small functions that can be used to modify incoming requests to our app before they are

sent off to route handlers. @1:07

V62 27/11/2020
What does a proxy do?
Proxy servers act as a firewall and web filter, provide shared network connections, and cache data to speed up common requests. A good proxy server keeps users and the internal network protected from the bad stuff that lives out in the wild internet.
[https://www.varonis.com/blog/what-is-a-proxy-server/]

Linting is the automated checking of your source code for programmatic and stylistic errors. This is done by using a lint tool (otherwise known as linter). ... The term linting originally comes from a Unix utility for C. There are many code linters available for various programming languages today.
[https://www.perforce.com/blog/qac/what-lint-code-and-why-linting-important#:~:text=Linting%20is%20the%20automated%20checking,(otherwise%20known%20as%20linter).&text=The%20term%20linting%20originally%20comes,for%20various%20programming%20languages%20today.]