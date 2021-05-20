/**
 * Main application file
 */

const express = require('express')
const http = require('http')

const config = require('./config/environment')
const expressConfig = require('./config/express')
const routeConfig = require('./routes')

// Connect to MongoDB


// Setup server
const app = express()
const server = http.createServer(app)

expressConfig(app)
routeConfig(app)

// Start server
function startServer() {
  app.theJobsApi = server.listen(config.port, () => {
    console.log(
      `Express server listening on http://${config.ip}:${config.port}, in ${app.get('env')} mode`
    )
  })
}

// execute some piece of code asynchronously, but as soon as possible
setImmediate(startServer)

// Expose app
module.exports = app
