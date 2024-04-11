const { DataTypes, Model } = require('sequelize');
const sequelize = require('./yourSequelizeSetup'); 

class GameGenre extends Model {}

GameGenre.init({
  genre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Genre",
      key: 'genre_id'
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
  modelName: 'GameGenre',
  tableName: 'GameGenre',
  timestamps: false
});

module.exports = GameGenre
