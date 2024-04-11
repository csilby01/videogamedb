import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize'

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

export default GameGenre
