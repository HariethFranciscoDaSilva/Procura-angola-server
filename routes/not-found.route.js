
const route = require('express').Router()

const controller = require('../controllers/not-found.controller')



route.get('/', controller.all)
route.get('/all', controller.allUsers)

module.exports = route