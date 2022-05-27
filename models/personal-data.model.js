

module.exports = ({sequelize, Sequelize}) => {

    const PersonalData = sequelize.define('personal-data', {

        bi: {
            type: Sequelize.STRING(14),
            primaryKey: true
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
        },
        telephone:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        avatar:{
            type: Sequelize.STRING,
        }
    })

    PersonalData.associate = (models) => {

        PersonalData.belongsTo(models.District)

    }

    return PersonalData
}