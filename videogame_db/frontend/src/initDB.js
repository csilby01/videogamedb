import { sequelize } from './lib/db/db.js';
import './lib/db/initModels.js'; // This ensures models are loaded and associated

async function startApp() {
  try {
    await sequelize.sync();
    // const queryInterface = sequelize.getQueryInterface();
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}
startApp();
