import {sequelize} from '../db/db.js'
import { Model, DataTypes } from 'sequelize'

class Genre extends Model {}

Genre.init({
  genre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  genre_name: {
    type: DataTypes.STRING(25),
    allowNull: true
  }
}, {
  sequelize, 
  modelName: 'Genre', 
  tableName: 'Genre',
  timestamps: false
});

export default Genre
