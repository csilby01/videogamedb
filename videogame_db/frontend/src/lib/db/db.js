// Establish connection to the database
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/videoGameDB.sqlite', // Replace with the path to your SQLite file
  logging: false // Toggle this for SQL command logging in console
});
