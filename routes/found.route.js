
const route = require('express').Router()

const controller = require('../controllers/found.controller')



route.post('/', controller.create)

route.get('/', controller.all)

route.get('/:id', controller.one)


module.exports = route