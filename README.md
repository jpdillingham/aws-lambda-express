# aws-lambda-express-bare-bones

This is a bare-bones, bare minimum implementation of an AWS Lambda script using [Express.js](https://expressjs.com/).

I previously tried the official AWS Labs example and was unable to get it to work, so I made this.

# Deploying to Lambda

Note: ensure that git and npm/node are installed.

1. `git clone http://github.com/jpdillingham/aws-lambda-express-bare-bones`
2. `cd aws-lambda-express-bare-bones`
3. `npm install`
4. Zip the contents of the `aws-lambda-express-bare-bones` directory and upload to a new lambda

You'll want to set up an API Gateway for this as well, but that's beyond the current scope.

# Running Locally

1. `git clone http://github.com/jpdillingham/aws-lambda-express-bare-bones`
2. `cd aws-lambda-express-bare-bones`
3. `node index.js`

The default port is 3000.