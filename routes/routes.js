
const route = require('express').Router()


route.use('/type_accounts', require('./typeAccount.route'))

route.use('/provinces', require('./province.route'))

route.use('/towns', require('./town.route'))

route.use('/districts', require('./district.route'))


module.exports = route