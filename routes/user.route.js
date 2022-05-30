
const route = require('express').Router()

const controller = require('../controllers/users.controllers')

const uploadConfig = require('../config/uploadConfig').type('images')

route.get('/', controller.all)

route.get('/:id', controller.one)

route.patch('/', controller.update)

route.post('/new_account', uploadConfig.single("avatar"), controller.create)

module.exports = route