const awsServerlessExpress = require('aws-serverless-express');  
const app = require('./app');  
const server = awsServerlessExpress.createServer(app);
const constants = require('./constants')

global.environment = constants.LAMBDA

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);  