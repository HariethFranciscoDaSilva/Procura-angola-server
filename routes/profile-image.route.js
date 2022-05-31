const route = require('express').Router()

const controller = require('../controllers/profile-image.controller')


route.get('/', controller.all)

route.get('/:avatar', controller.one)

route.patch('/', controller.update)

route.post('/', controller.create)

module.exports = route