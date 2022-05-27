




module.exports = ({sequelize, Sequelize}) => {

    const information_file = sequelize.define('information-file', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }, 
        fileName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    information_file.associate = (models) => {

        information_file.belongsTo(models.Information)

    }

    return information_file;
}