const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')
class Reviews extends Model{
    static async displayReview(review_id, user_id){
        try{
            const review = await Reviews.findByPk(review_id)
            if (review) {
                if (review.user_id === user_id) {
                    return review.rating;
                } else {
                    return { error: "Incorrect user." };
                }
            } else {
                // No review found, return null
                return null;
            }
        }catch(error){
            console.log(error)
            return null
        }
    }
}
Reviews.init({
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Game', 
        key: 'game_id', 
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', 
        key: 'user_id', 
      }
    },
    platform: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    review_text: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    rating: {
      type: DataTypes.VARCHAR(2),
      allowNull: false

    }
  }, {
    sequelize, // This is the connection instance
    modelName: 'Reviews', // We need to choose the model name
    tableName: 'Reviews', // Explicitly specifying the table name is optional here, but done for clarity
    timestamps: false, // Assuming you don't want Sequelize to automatically add timestamp fields for createdAt and updatedAt
  });
  
  module.exports = Reviews;