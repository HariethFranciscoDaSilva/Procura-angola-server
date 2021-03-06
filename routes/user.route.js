
const route = require('express').Router()

const controller = require('../controllers/users.controllers')

const uploadConfig = require('../config/uploadConfig').type('images')

const tokenMiddleWare = require('../application/middlewares/middleware')

route.get('/', controller.all)

route.get('/all', controller.allUsers)

route.delete('/delete/:id', controller.delete)

route.get('/:id', controller.one)

route.post('/authenticate', controller.authenticate, tokenMiddleWare.userSetToken)

route.post('/verify_token', tokenMiddleWare.userVerifyToken)

route.patch('/', controller.update)

route.post('/new_account', uploadConfig.single("avatar"), controller.create)

route.post('/reset_password', controller.resetPassword)

module.exports = route
