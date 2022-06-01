




module.exports = ({sequelize, Sequelize}) => {

    const information_remark = sequelize.define('information-remark', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }, 
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        owner: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    })


    information_remark.associate = (models) => {

        information_remark.belongsTo(models.User)

        information_remark.belongsTo(models.Information)

    }

    return information_remark;
}