require('dotenv').config()
const mongoose = require('mongoose')

class MongoConfig {
  constructor () {
    this.mongo()
  }

  mongo () {
    console.log(process.env.MONGO_URL)
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/Pokemon', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    }).catch((err) => {
      throw err
    })
  }
}

module.exports = new MongoConfig()
