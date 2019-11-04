const express = require('express')



const MovieController = require('./controllers/MovieController')
const DashboardController = require('./controllers/DashboardController')


const routes = express.Router()


routes.post('/movies', MovieController.store)
routes.get('/movies', MovieController.index)
routes.delete('/movies', MovieController.delete)
routes.get('/dashboard', DashboardController.show)
module.exports = routes