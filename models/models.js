const Sequelize = require('sequelize')

const dbConfig = require('../config/dbConfing')

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

db.Op = Sequelize.Op

db.Sequelize = Sequelize

db.sequelize = sequelize

db.TypeAccount = require('./type-account.model')(db)

Object.keys(db).forEach(key => {
    if(db[key].associate)
        db.associate(db)
})

if (process.env.ENV == "DEV") {
    sequelize.sync({
        force: false
    });
}

module.exports = db;