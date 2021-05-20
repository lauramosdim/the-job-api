/**
 * Default specific configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const merge = require('lodash/merge')

const env = (process.env.NODE_ENV = process.env.NODE_ENV || 'development')

require('dotenv').config({
  path: `.env.${env}`,
})

let envFile = require('./development.js')

// if (env === 'production') {
//   envFile = require('./production.js')
// }

const all = {
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.PORT || 3030,

  // Should we populate the DB with sample data?
  seedDB: false,
}

// Export the config object based on the NODE_ENV
// =============================================
module.exports = merge(all, envFile || {})
