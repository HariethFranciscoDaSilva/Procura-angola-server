
const route = require('express').Router()

const controller = require('../controllers/notification.controller')


route.get('/:id', controller.all)

route.get('/disable/:id', controller.desactivateNotification)


module.exports = route