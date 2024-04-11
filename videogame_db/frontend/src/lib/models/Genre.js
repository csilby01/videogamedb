const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); // Adjust this path to where you've set up your Sequelize instance

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

module.exports = Genre
