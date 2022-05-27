

module.exports = ({sequelize, Sequelize}) => {

    const user = sequelize.define('user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }, 
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }, 
        avatar: {
            type: Sequelize.STRING
        }
    })

    user.associate = (model) => {

        user.belongsTo(model.TypeAccount)

        user.belongsTo(model.PersonalData)

    }

    return user;

}