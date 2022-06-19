
const route = require('express').Router()


route.use('/provinces', require('./province.route'))

route.use('/towns', require('./town.route'))

route.use('/districts', require('./district.route'))

route.use('/users', require('./user.route'))

route.use('/avatar', require('./profile-image.route'))

route.use('/informations', require('./information.route'))

route.use('/informations_files', require('./information-file.route'))

route.use('/information_remarks', require('./information-remark.route'))

route.use('/help_information_user', require('./help-information-user.route'))

route.use('/fake_information', require('./fake-information.route'))

route.use('/not_founds', require('./not-found.route'))

route.use('/founds', require('./found.route'))

module.exports = route