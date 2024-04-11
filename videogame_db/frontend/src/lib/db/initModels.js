import { sequelize } from './db.js';
import Game from '../models/Game.js';
import User from '../models/User.js';
import Reviews from '../models/Reviews.js';
import Following from '../models/Following.js';
import Genre from '../models/Genre.js';
import GameGenre from '../models/GameGenre.js';
import Tag from '../models/Tag.js';
import GameTag from '../models/GameTag.js';

// Initialize models
const Game1 = new Game(sequelize);
const User1 = new User(sequelize);
const Review1= new Reviews(sequelize);
const Following1 = new Following(sequelize);
const Genre1 = new Genre(sequelize);
const GameGenre1 = new GameGenre(sequelize);
const Tag1 = new Tag(sequelize);
const GameTag1 = new GameTag(sequelize);

// Set up model associations
// Game1.hasMany(Review1, { foreignKey: 'game_id' });
// Review1.belongsTo(Game1, { foreignKey: 'game_id' });

// User1.hasMany(Review1, { foreignKey: 'user_id' });
// Review1.belongsTo(User1, { foreignKey: 'user_id' });

// User1.belongsTo(Game1, { as: 'FavoriteGame', foreignKey: 'fav_game_id' });
// Game1.hasMany(User1, { as: 'Fans', foreignKey: 'fav_game_id' });

// User1.belongsToMany(User1, { as: 'Followers', through: Following, foreignKey: 'user_id', otherKey: 'follows_id' });
// User1.belongsToMany(User1, { as: 'Following', through: Following, foreignKey: 'follows_id', otherKey: 'user_id' });

// Game1.belongsToMany(Genre1, { through: GameGenre, foreignKey: 'game_id' });
// Genre1.belongsToMany(Game1, { through: GameGenre, foreignKey: 'genre_id' });

// Game1.belongsToMany(Tag1, { through: GameTag, foreignKey: 'game_id' });
// Tag1.belongsToMany(Game1, { through: GameTag, foreignKey: 'tag_id' });

// Synchronize all models with the database
async function syncDb() {
  try {
    await sequelize.sync(); // Use { force: true } to drop and recreate tables - use with caution!
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

// Export the sequelize instance, the sync function, and the models
export {syncDb, Game1, Following1, GameGenre1, GameTag1, Genre1, Review1, Tag1, User1};