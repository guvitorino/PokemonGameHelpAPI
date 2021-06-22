require('../database/MongoConfig')

const model = require('../models/entity/Pokemon')
const docs = require('./Pokemons.json')

model.collection.insertMany(docs)
  .then(() => {
    console.log('Documents imported')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
