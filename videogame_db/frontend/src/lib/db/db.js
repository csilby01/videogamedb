// Establish connection to the database
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/videoGameDB.sqlite',
  logging: false
});
