/**
 * Development specific configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const server = process.env.MONGODB_SERVER
const database = process.env.MONGODB_DATABASE

module.exports = {
  // MongoDB connection options
  mongo: {
    uri: `mongodb+srv://${server}/${database}?retryWrites=true&w=majority`,
    db: process.env.MONGODB_DATABASE,
    server: process.env.MONGODB_SERVER,
  },

  // Seed database on startup
  seedDB: false,

  ip: '127.0.0.1',
}
