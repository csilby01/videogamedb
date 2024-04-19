import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize' 


class User extends Model{
    static async findUser(id){
        try {
            const user = await User.findByPk(id)
            return user ? user : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    static async findByUsername(userName){
        try{
            const user = await User.findOne({
                where: { username: userName }
        });
        return user ? user : null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    static async findBySearch(search){
        const query = 'SELECT * FROM User WHERE username LIKE :searched';
        const options = {
          replacements: { searched: `%${search}%` },
          model: User,
        }
      return await sequelize.query(query, options);
    }
}
User.init(
    {
        user_id:{
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
        modelName: 'User',
        tableName: 'User',
    }
)

export default User;