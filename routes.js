/**
 * Main application routes
 */

// Import Endpoints
const helloWorld = require('./api/helloworld')
const user = require('./api/user')
const job = require('./api/job')

const auth = require('./auth')

module.exports = app => {
  app.use('/api/helloworld', helloWorld)
  app.use('/api/jobs', job)
  app.use('/api/users', user)
  app.use('/auth', auth)
}
