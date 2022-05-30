

module.exports = ({sequelize, Sequelize}) => {

    const user = sequelize.define('user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
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
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    user.associate = (model) => {

        user.belongsTo(model.TypeAccount)

    }

    return user;

}