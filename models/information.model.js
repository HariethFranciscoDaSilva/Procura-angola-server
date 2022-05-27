module.exports = ({
    sequelize,
    Sequelize
}) => {

    const information = sequelize.define('information', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    })


    information.associate = (models) => {

        information.belongsTo(models.User)

        information.belongsTo(models.PersonalData)

    }

    return information;
}