import { sequelize } from './lib/db/db.js';
import Game from './lib/models/Game.js';
import User from './lib/models/User.js';
import Reviews from './lib/models/Reviews.js';
import Following from './lib/models/Following.js';
import Genre from './lib/models/Genre.js';
import GameGenre from './lib/models/GameGenre.js';
import Tag from './lib/models/Tag.js';
import GameTag from './lib/models/GameTag.js';

await Tag.drop();
await GameGenre.drop();
await GameTag.drop();
await Genre.drop();