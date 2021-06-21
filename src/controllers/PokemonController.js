const pokemonBO = require('../models/bo/PokemonBO')

class PokemonController {
  static async list (req, res) {
    // #swagger.summary = 'List and Filter Pokemons'
    // #swagger.description = 'List all pokemons or filter by name or type'

    /* #swagger.parameters['limit'] = {
        in: 'query',
        description: 'Limit of documents to show per page. Default is 100',
        type: 'integer'
      }
    */

    /* #swagger.parameters['page'] = {
        in: 'query',
        description: 'Number of page to show. Default is 1',
        type: 'integer',
      }
    */

    /* #swagger.parameters['queryBy'] = {
        in: 'query',
        description: 'Field name to use to filter documents. name or type',
        type: 'string',
    }
    */

    /* #swagger.parameters['criteria'] = {
        in: 'query',
        description: 'Value to filter documents. A name or a type',
        type: 'string',
      }
    */

    const { limit, page, queryBy, criteria } = req.query

    try {
      const pokemons = await pokemonBO.list(page, limit, queryBy, criteria)
      return res.status(200).json(pokemons)
    } catch (err) {
      console.log(err)
      return res.sendStatus(500)
    }
  }
}

module.exports = PokemonController
