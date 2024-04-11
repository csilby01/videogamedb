import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize'

class Following extends Model {
    static async findFollowing(user_id, friend_id){
        try {
            const following = await Following.findOne({
                where: {
                    user_id: user_id,
                    friend_id: friend_id
                }
            });
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

Following.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: 'User',
        key: 'id'
    }
  },
  friend_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: 'User',
        key: 'id'
    }
  }
}, {
  sequelize, 
  modelName: 'Following'
});

export default Following;