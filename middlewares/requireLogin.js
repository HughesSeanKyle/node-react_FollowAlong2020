module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in' });
    } 

    next();
};



/*
The lowercase in the name indicates that we will be exporting a function

If it is capitalized then it indicates that we will be exporting a class or component

A middleware is a function that takes the incoming request and has the ability to  modify the request inside of the middleware body(inside of this function).  

next is a function that we call when our middleware is complete or all finnished running. It is similar to the done callback in the passport code. If there are many middlewares the next function will indicate it it time to move to the next middleware. 

One request can run through many middlewares 
request => middleware #1 => next => middleware #2 => response 

**NB! - Note that next is only called if we actually want to go to the next middleware - If the request does not require another middleware in the chain to modify it we do not have to call next. 
*/

