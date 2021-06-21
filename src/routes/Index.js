const routes = require('express').Router()
const swaggerUi = require('swagger-ui-express')

const pokemonRoutes = require('./Pokemon.routes')
const teamRoutes = require('./Team.routes')

const swaggerFile = require('../../swagger_output.json')

routes.use('/pokemon', pokemonRoutes)
routes.use('/team', teamRoutes)

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = routes
