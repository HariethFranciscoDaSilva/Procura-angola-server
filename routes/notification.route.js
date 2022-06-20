
const route = require('express').Router()

const controller = require('../controllers/notification.controller')


route.get('/:id', controller.all)


module.exports = route