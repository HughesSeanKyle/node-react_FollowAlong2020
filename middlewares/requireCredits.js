module.exports = (req, res, next) => {
    if (!req.user.credits < 1) {
        return res.status(403).send({ error: 'Insufficient Credits' });
    } 

    next();
};

/*
To generalize the 400-499 status errors indicates to the user that the origin of the error comes from their side or the request they have made.


 */