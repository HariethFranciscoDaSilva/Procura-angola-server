const route = require('express').Router()

const controller = require('../controllers/file-information.controller ')

route.get('/appeal_video/:appeal_video', controller.video)

route.get('/avatar/:avatar', controller.avatar)


module.exports = route