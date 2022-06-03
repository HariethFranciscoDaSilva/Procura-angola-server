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
        },
        avatar: {
            type: Sequelize.STRING,
        },
        appeal_video: {
            type: Sequelize.STRING,
        }
    })

    information.associate = (models) => {

        information.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })

        information.belongsTo(models.PersonalData, {
            as: "personalData",
            foreignKey: "personalDataId"
        })

    }

    return information;
}