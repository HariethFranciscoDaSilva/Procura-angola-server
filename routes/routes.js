
const route = require('express').Router()


route.use('/provinces', require('./province.route'))

route.use('/towns', require('./town.route'))

route.use('/districts', require('./district.route'))

route.use('/users', require('./user.route'))


module.exports = route