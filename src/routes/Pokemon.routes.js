const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')

const PokemonController = require('../controllers/PokemonController')

routes.get('/list', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    queryBy: Joi.string(),
    criteria: Joi.string(),
    limit: Joi.number().integer().greater(0).default(100),
    page: Joi.number().integer().greater(0).default(1)
  })
}), PokemonController.list)

module.exports = routes
