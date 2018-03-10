const awsServerlessExpress = require('aws-serverless-express');  
const app = require('./app');  
const server = awsServerlessExpress.createServer(app);

global.environment = 'lambda'

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);  