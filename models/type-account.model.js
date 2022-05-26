

module.exports = ({sequelize, Sequelize}) => {

    const typeAccount = sequelize.define('type-account', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        }, 
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }) 


    return typeAccount

}