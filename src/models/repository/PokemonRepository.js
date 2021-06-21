const Pokemon = require('../entity/Pokemon')

class PokemonRepository {
  async find (query, page, limit) {
    const options = {
      page,
      limit,
      select: {
        _id: 0
      }
    }

    return Pokemon.paginate(query, options)
  }
}

module.exports = new PokemonRepository()
