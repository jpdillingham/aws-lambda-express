'use strict'  
const path = require('path');  
const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');

const app = express();

app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {  
    res.status(200);
    res.send('Hello world');
});

app.get('/test', function(req, res) {  
    res.status(200);
    res.send('test');
});

module.exports = app;  