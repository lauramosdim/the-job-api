/**
 * Connect Database file
 */
const mongoose = require('mongoose')

const config = require('./config/environment')

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(config.mongo.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error('Error', 'MongoDB connection error', {
      data: error,
      time: new Date().toISOString(),
    })
    process.exit(-1)
  }
}

module.exports = connectDB
