


module.exports = ({sequelize, Sequelize}) => {

    const not_found = sequelize.define('not-found', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        lostDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    })

    not_found.associate = (models) => {

        not_found.belongsTo(models.User)

        not_found.belongsTo(models.Information)

    }

    return not_found;
}