
const route = require('express').Router()

const controller = require('../controllers/not-found.controller')



route.get('/', controller.all)

route.get('/:id', controller.one)


module.exports = route