

module.exports = ({sequelize, Sequelize}) => {

    const town = sequelize.define('town', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }, 
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    })

    town.associate = (models) => {

        town.belongsTo(models.Province)

    }

    return town;
}