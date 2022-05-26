


const route = require('express').Router()

const controller = require('../controllers/typeAccount.controllers')


route.post('/', controller.create)

module.exports = route