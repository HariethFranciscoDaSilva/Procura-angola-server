const route = require('express').Router()

const controller = require('../controllers/fake-information.controller')

route.post('/', controller.FakeInformation)
route.get('/all', controller.listAllFakeInformation)

module.exports = route