
import { Model, DataTypes, Sequelize } from 'sequelize'

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
    type: DataTypes.INT,
    primaryKey: true,
    allowNull: false,
    references: {
        model: 'User',
        key: 'id'
    }
  },
  friend_id: {
    type: DataTypes.INT,
    primaryKey: true,
    allowNull: false,
    references: {
        model: 'User',
        key: 'id'
    }
  }
}, {
  Sequelize, 
  modelName: 'Following'
});

export default Following;