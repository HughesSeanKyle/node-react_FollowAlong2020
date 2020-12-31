const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => { //3
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        req.user.credits += 5; //1
        const user = await req.user.save(); // 2

        // respond to request
        res.send(user);
    });
};

/*
//1
passport makes it possible to access the user with the 'user' keyword. 
It is set up automatically by passport with the passport.initialize and passport.session calls in index.js. (NB! this does not save the new info)

the 'user' keyword will be undefined if client is not logged in. 

// 2
this maintains an up to date copy of user model
They are however to separate objects in memory
This represents the same user but this will be the copy that get returned from the save 

// 3
app.post('/api/stripe', requireLogin, async (req, res)
Anytime somebody makes a request to this route (done with express server) [2nd arg] - Here  is a reference to this function (requireLogin) to run whenever this request comes in. 
 */

