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

module.exports = app;  