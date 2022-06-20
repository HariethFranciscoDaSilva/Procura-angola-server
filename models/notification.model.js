module.exports = ({
    sequelize,
    Sequelize
}) => {

    const Nofication = sequelize.define('notification', {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    })

    Nofication.associate = (models) => {

        Nofication.belongsTo(models.User)

        Nofication.belongsTo(models.Information)

        Nofication.belongsTo(models.Found, {
            as: 'found',
            foreignKey: 'foundId'
        })

        Nofication.belongsTo(models.NotFound, {
            as: 'notFound',
            foreignKey: 'notFoundId'
        })

    }

    return Nofication;
}