const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); 

class GameTag extends Model {}

GameTag.init({
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tag',
      key: 'tag_id'
    },
    primaryKey: true
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Game',
      key: 'game_id'
    },
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'GameTag',
  tableName: 'GameTag', 
  timestamps: false
});

module.exports = GameTag
