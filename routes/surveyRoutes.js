const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
    app.post('./api/surveys', requireLogin, requireCredits, (req, res) => { // 1

    });
};

/*
// 1
can be an arbitrary amount of arguments executed/processed until the response object is eventually retured to client. However, they must be added in the order we want to use them. For example in this scenario we want the user to be logged in before be require a credits check.  

Currently not executing function, just making reference to the function to let express know that here is a function to run should the client hit this route and login is required to access the content served on the route. 
*/