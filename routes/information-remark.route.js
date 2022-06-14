const route = require('express').Router()

const controller = require('../controllers/information-remark.controller')



route.get('/:id', controller.informationIdRemarks)

route.post('/', controller.create)

route.delete('/:informationId/:remarkId', controller.deleteOneInformationRemark)


module.exports = route