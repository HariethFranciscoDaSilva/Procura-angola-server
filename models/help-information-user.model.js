

module.exports = ({sequelize, Sequelize}) => {

    const helpInformationUser = sequelize.define('help-information-user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }
    })

    helpInformationUser.associate = (models) => {

        helpInformationUser.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })

        helpInformationUser.belongsTo(models.Information, {
            as: "information",
            foreignKey: "informationId"
        })

    }

    return helpInformationUser;
}