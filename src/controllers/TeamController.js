const teamBO = require('../models/bo/TeamBO')

class TeamController {
  static async create (req, res) {
    const { name, pokemons } = req.body

    const model = await teamBO.create({
      name,
      pokemons
    })

    return res.status(201).json(model)
  }
}

module.exports = TeamController
