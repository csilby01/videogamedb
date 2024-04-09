const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')
class Signatures extends Model{
    static async findSignature(id, password){
        try{
            const signature = await Signatures.findByPk(id)
            if (signature) {
                if (signature.password === password) {
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

Signatures.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        }
    },
    {
        sequelize,
        modelName: 'Signatures',
    }
)

module.exports = Signatures