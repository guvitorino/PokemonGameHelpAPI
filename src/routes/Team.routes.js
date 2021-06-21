const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')

const TeamController = require('../controllers/TeamController')

routes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(5).required(),
    pokemons: Joi.array().max(6).required()
  })
}), TeamController.create)

module.exports = routes
