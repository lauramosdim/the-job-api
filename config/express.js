/**
 * Express configuration
 */

const express = require('express')
const cors = require('cors')
const compression = require('compression')
const errorHandler = require('errorhandler')
const methodOverride = require('method-override')
const morgan = require('morgan')

module.exports = app => {
  const env = app.get('env')

  app.use(compression())
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(methodOverride())

  if (env === 'development' || env === 'test') {
    app.use(errorHandler()) // Error handler - has to be last
  }
}
