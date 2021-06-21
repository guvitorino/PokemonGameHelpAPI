const routes = require('express').Router()
const pokemonRoutes = require('./Pokemon.routes')
const teamRoutes = require('./Team.routes')

routes.use('/pokemon', pokemonRoutes)
routes.use('/team', teamRoutes)

module.exports = routes
