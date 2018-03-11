const awsServerlessExpress = require('aws-serverless-express');  
const path = require('path');  
const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');

const app = express();

app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', function(req, res) {  
    res.status(200);
    res.json('Hello world');
});

app.listen(3000, () => console.log('Listening on port 3000.')); // ignored by lambda

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);  