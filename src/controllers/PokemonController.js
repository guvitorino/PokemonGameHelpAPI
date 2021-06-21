const pokemonBO = require('../models/bo/PokemonBO')

class PokemonController {
  static async list (req, res) {
    const { limit, page, queryBy, criteria } = req.query

    const pokemons = await pokemonBO.list(page, limit, queryBy, criteria)
    return res.status(200).json(pokemons)
  }
}

module.exports = PokemonController
