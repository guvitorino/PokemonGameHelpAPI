const teamBO = require('../models/bo/TeamBO')
class TeamController {
  static async create (req, res) {
    // #swagger.summary = 'Create a new Team'
    // #swagger.description = 'Create a new Team'

    /* #swagger.parameters['name'] = {
        in: 'body',
        description: 'Name of the team, Min: 5 characters',
        type: 'string',
        required: 'true'
      }
    */

    /* #swagger.parameters['pokemons'] = {
        in: 'body',
        description: 'List of selected pokemons',
        type: 'array',
        required: 'true',
      }
    */

    const { name, pokemons } = req.body

    try {
      const model = await teamBO.create({
        name,
        pokemons
      })

      return res.status(201).json(model)
    } catch (err) {
      console.log(err)
      return res.sendStatus(500)
    }
  }
}

module.exports = TeamController
