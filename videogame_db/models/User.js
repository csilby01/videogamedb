const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')
class User extends Model{
    static async findSignature(id, password){
        try{
            const user = await User.findByPk(id)
            if (user) {
                if (user.password === password) {
                    return { error: "You've already signed. You can't sign it again." };
                } else {
                    return { error: "Incorrect password. You've already signed." };
                }
            } else {
                // No signature found, user can sign.
                return null;
            }
        }catch(error){
            console.log(error)
            return null
        }
    }
}
User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,

            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
    
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        favGameID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: {
                model: 'Game',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'User',
    }
)

module.exports = User