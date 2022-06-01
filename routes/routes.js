
const route = require('express').Router()


route.use('/provinces', require('./province.route'))

route.use('/towns', require('./town.route'))

route.use('/districts', require('./district.route'))

route.use('/users', require('./user.route'))

route.use('/avatar', require('./profile-image.route'))

route.use('/informations', require('./information.route'))

route.use('/not_founds', require('./not-found.route'))


module.exports = route