const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); // Ensure this points to your Sequelize setup file

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

module.exports = Tag
