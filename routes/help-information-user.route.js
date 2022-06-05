const route = require('express').Router()

const controller = require('../controllers/help-information-user.controller')


route.get('/', controller.all)

route.get('/user/:id', controller.one)

route.get('/user/:userId/:informationId', controller.verifyHelp)

route.get('/information/:informationId', controller.allFromInformation)

route.post('/', controller.create)

route.post('/remove_help', controller.removeHelp)

module.exports = route