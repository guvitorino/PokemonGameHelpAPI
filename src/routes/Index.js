const routes = require('express').Router()
const pokemonRoutes = require('./Pokemon.routes')

routes.use('/pokemon', pokemonRoutes)

module.exports = routes
