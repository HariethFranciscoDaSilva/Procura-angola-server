
const dbConfig = require('../config/dbConfing')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        pool: dbConfig.POOL
    }
)

db = {}


db.Sequelize = Sequelize

db.sequelize = sequelize

db.Op = Sequelize.Op

db.TypeAccount = require('./type-account.model')(db)

db.Province = require('./province.model')(db)

db.Town = require('./town.model')(db)

db.District = require('./district.model')(db)

db.PersonalData = require('./personal-data.model')(db)

db.User = require('./user.model')(db)

db.Information = require('./information.model')(db)

db.InformationFile = require('./information-files.model')(db)

db.InformationRemark = require('./information-remark')(db)

db.Found = require('./found.model')(db)

db.NotFound = require('./notFound.model')(db)

db.FakeInformation = require('./fake-information.model')(db)

db.HelpInformationUser = require('./help-information-user.model')(db)

Object.keys(db).forEach(key => {
    if(db[key].associate)
        db[key].associate(db)
})

if (process.env.ENV == "DEV") {
    sequelize.sync({
        force: true, alter: true
    });
}

module.exports = db;