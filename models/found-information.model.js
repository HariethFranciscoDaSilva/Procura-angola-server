


module.exports = ({sequelize, Sequelize}) => {

    const found = sequelize.define('found', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
        }
    })

    found.associate = (models) => {

        found.belongsTo(models.User)

        found.belongsTo(models.Information)

    }

    return found;
}