const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); 

class Game extends Model {}

Game.init({
  game_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false 
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: true 
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: true 
  },
  publisher: {
    type: DataTypes.STRING(100),
    allowNull: true 
  },
  developer: {
    type: DataTypes.STRING(100),
    allowNull: true 
  },
  avg_rating: {
    type: DataTypes.VARCHAR(3),
    defaultValue: 0.00 
  }
}, {
  sequelize,
  modelName: 'Game',
  tableName: 'Game', 
  timestamps: false
});

module.exports = Game;
