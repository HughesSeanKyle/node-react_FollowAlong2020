const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('./api/surveys', requireLogin, (req, res) => { // 1

    });
};

/*
// 1
can be an arbitrary amount of arguments executed/processed until the response object is eventually retured to client. 

Currently not executing function, just making reference to the function to let express know that here is a function to run should the client hit this route and login is required to access the content served on the route. 
*/