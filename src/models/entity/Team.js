const mongoose = require('mongoose')
const PokemonSchema = mongoose.model('pokemons').schema

const Team = new mongoose.Schema(
  {
    id: Number,
    name: String,
    pokemons: [PokemonSchema]
  }
)

module.exports = mongoose.model('teams', Team, 'teams')
