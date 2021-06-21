const teamBO = require('../models/bo/TeamBO')

class TeamController {
  static async create (req, res) {
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
