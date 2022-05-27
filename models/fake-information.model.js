

module.exports = ({sequelize, Sequelize}) => {

    const fake_information = sequelize.define('fake-information', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    fake_information.associate = (models) => {

        fake_information.belongsTo(models.User)
        
        fake_information.belongsTo(models.Information)

    }

    return fake_information;
}