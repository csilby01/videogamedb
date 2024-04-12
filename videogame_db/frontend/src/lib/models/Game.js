import { DataTypes, Model } from 'sequelize'
import {sequelize} from '../db/db.js'

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
  // publisher: {
  //   type: DataTypes.STRING(100),
  //   allowNull: true 
  // },
  // developer: {
  //   type: DataTypes.STRING(100),
  //   allowNull: true 
  // },
  game_photo: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  avg_rating: {
    type: DataTypes.DECIMAL(3,2),
    defaultValue: 0.00 
  }
}, {
  sequelize,
  modelName: 'Game',
  tableName: 'Game', 
  timestamps: false
});

export default Game
