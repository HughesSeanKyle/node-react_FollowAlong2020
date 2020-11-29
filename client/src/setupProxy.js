const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};

/*
In Dev mode only

This architecture makes it possible to make the Outh request from lh:3000 and communicates this request to lh:5000. 

Browser is on lh:3000, req to lh:5000 is a Cross Origin Resource Sharing(CORS) request. 

As a security feature The browser assumes that if you're at the domain lh 3000 and you make a request to a different domain the browser assumes that you are trying to do something malicious 

Request is made in lh:3000, then forwarded to proxy, proxy forwards to Node/Express API, API sends response back to proxy, then communicated back to browser. As far as browser is concerned, it thinks it made request to lh:3000

In production
Do not have CORS issues in this case as client and sever hosted at same heroku domain. 

Full oAuth (in development) flow diagram in v63 @17:00
Full oAuth (in production) flow diagram in v63 @25:00
*/