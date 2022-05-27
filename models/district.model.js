

module.exports = ({sequelize, Sequelize}) => {

    const district = sequelize.define('district', {
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

    district.associate = (models) => {

        district.belongsTo(models.Town)

    }
    
    return district;
}