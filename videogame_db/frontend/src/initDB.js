import { sequelize } from './lib/db/db.js';
import './lib/db/initModels.js'; // This ensures models are loaded and associated

async function startApp() {
  try {
    await sequelize.sync(); // Add { force: true } during development if necessary
    console.log('Database synced');
    // Start your server or application
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}
startApp();
