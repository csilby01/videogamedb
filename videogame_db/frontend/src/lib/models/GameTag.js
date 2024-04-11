import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize'

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

export default GameTag
