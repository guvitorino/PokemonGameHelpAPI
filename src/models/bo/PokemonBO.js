const pokemonRepository = require('../repository/PokemonRepository')

class PokemonBO {
  async list (page, limit, queryBy, criteria) {
    const query = {}

    if (queryBy === 'type') {
      query.types = criteria
    } else if (queryBy === 'name') {
      query.name = criteria
    }

    return pokemonRepository.find(query, page, limit)
  }
}

module.exports = new PokemonBO()
