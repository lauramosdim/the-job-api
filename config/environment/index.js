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

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: process.env.BCRYPT_SALT || 'n0d3j5-th3-j0bs-s3cr3t',
  },

  userRoles: ['manager', 'admin', 'candidate'],
}

// Export the config object based on the NODE_ENV
// =============================================
module.exports = merge(all, envFile || {})
