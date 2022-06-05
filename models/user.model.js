module.exports = ({
    sequelize,
    Sequelize
}) => {

    const user = sequelize.define('user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avatar: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true,
                is: /^[0-9]+$/i
                }
                
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    })

    return user;

}