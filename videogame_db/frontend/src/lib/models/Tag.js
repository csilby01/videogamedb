import sequelize from '../db'
import { Model, DataTypes } from 'sequelize'

class Tag extends Model {}

Tag.init({
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tag_name: {
    type: DataTypes.STRING(25),
    allowNull: false 
  }
}, {
  sequelize,
  modelName: 'Tag',
  tableName: 'Tag',
  timestamps: false
});

export default Tag
