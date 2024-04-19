import { sequelize } from './lib/db/db.js';
import './lib/db/initModels.js'; // This ensures models are loaded and associated
import Reviews from './lib/models/Reviews.js';
import Game from './lib/models/Game.js'

async function startApp() {
  try {
    await sequelize.sync();
    // const queryInterface = sequelize.getQueryInterface();
    Game.hasMany(Reviews, {
      foreignKey: 'review_id',
      as: 'reviews'
    });
    Reviews.belongsTo(Game, {
      foreignKey: 'game_id',
      as: 'game'
    });
    console.log(Game.associations);
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}
startApp();
