const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// Mongoose model class - can now create instance of survey
const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('./api/surveys', requireLogin, requireCredits, (req, res) => { // 1
        const { title, subject, body, recipients } = req.body; // 1.1 

        // 1.2
        const survey = new Survey({
            title, 
            subject,
            body
        })
    });
};

/*
// 1
can be an arbitrary amount of arguments executed/processed until the response object is eventually retured to client. However, they must be added in the order we want to use them. For example in this scenario we want the user to be logged in before be require a credits check.  

Currently not executing function, just making reference to the function to let express know that here is a function to run should the client hit this route and login is required to access the content served on the route.

// 1.1 
All the information that gets passed along inside this request exists on the body property of that object. (request object)

// 1.2
User lowercase for survey to indicate that it is an instance of a survey
Key value pairs in survey object is names the same. Therefore, condensed to only one word as per es2015 syntax

responded key inside recipient model will have it boolean set to false by default. Therefore does not need to be defined before hand unless that is the intent. Only string key will need to be specified. 
*/