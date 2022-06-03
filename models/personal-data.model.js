module.exports = ({
    sequelize,
    Sequelize
}) => {

    const PersonalData = sequelize.define('personal-data', {

        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        gender: {
            type: Sequelize.CHAR(1),
            allowNull: false
        }
    })

    PersonalData.associate = (models) => {
        
        PersonalData.belongsTo(models.Town, {
            as: "town",
            foreignKey: "townId"
        })
    }

    return PersonalData
}