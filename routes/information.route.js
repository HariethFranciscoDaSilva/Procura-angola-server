const route = require('express').Router()

const controller = require('../controllers/information.controller')

const uploadConfig_info = require('../config/uploadConfig').type('informations')



route.post('/', uploadConfig_info.fields([{name: 'avatar'}, {name: 'appeal_video'}]),
    controller.create
)


module.exports = route