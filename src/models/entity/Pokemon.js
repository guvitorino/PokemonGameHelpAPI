const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Pokemon = new mongoose.Schema(
  {
    id: Number,
    name: String,
    height: Number,
    weight: Number,
    xp: Number,
    types: [],
    image: String
  }
)

Pokemon.plugin(mongoosePaginate)

module.exports = mongoose.model('pokemons', Pokemon, 'pokemons')
