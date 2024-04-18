import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize' 


class Users extends Model{
    static async findUser(id){
        try {
            const user = await Users.findByPk(id)
            return user ? user : null;
        } catch (error) {
            console.log(error)
            return null
        }
      }
}
Users.init(
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
        favGames: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        role: {
            type: DataTypes.ENUM,
            values: ['admin', 'user'],
            defaultValue: 'user',
            allowNull: false
          }
    },
    {
        sequelize,
        modelName: 'Users',
        tableName: 'Users',
    }
)

export default Users;