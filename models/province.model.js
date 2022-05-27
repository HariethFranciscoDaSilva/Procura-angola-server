

module.exports = ({sequelize, Sequelize}) => {

    const province = sequelize.define('province', {
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

    return province;
}