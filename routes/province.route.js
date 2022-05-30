
const route = require('express').Router()

const controller = require('../controllers/province.controller')


route.get('/', controller.all)

route.get('/:id', controller.one)

route.patch('/', controller.update)

route.post('/', controller.create)

module.exports = route