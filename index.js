//In node projects, file called index.js by convention
const express = require('express');
const app = express();

//vid 10 01:01
app.get('/', (req, res) => {
    res.send({ test: 'changes' });
});

const PORT = process.env.PORT || 5000 //V12 04:45
//vid 10 06:44
app.listen(PORT);