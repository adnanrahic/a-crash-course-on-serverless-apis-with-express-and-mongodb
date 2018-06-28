const sls = require('serverless-http')
const app = require('./app')
module.exports.run = sls(app)
