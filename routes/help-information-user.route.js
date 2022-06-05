const route = require('express').Router()

const controller = require('../controllers/help-information-user.controller')


route.post('/', controller.create)

route.post('/remove_help', controller.removeHelp)

module.exports = route