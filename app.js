const path = require('path');  
const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');

const constants = require('./constants');

const app = express();

app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', function(req, res) {  
    res.status(200);
    res.json('Hello world');
});

app.get('/test', function(req, res) {  
    res.status(200);
    res.json({ one: 1, two: 2 });
});

app.get('/env', (req,res) => {
    res.status(200);
    res.json(global.environment)
})

if (global.environment === constants.NODE) {
    app.listen(3000, () => console.log('Listening on port 3000.'))
}

module.exports = app;  