const route = require('express').Router()

const controller = require('../controllers/information-remark.controller')


route.post('/',
    controller.create
)

route.get('/length/information/:id',
    controller.informationIdRemarks
)

module.exports = route