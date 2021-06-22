require('dotenv').config()
const mongoose = require('mongoose')

class MongoConfig {
  constructor () {
    this.mongo()
  }

  mongo () {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    }).catch((err) => {
      throw err
    })
  }
}

module.exports = new MongoConfig()
