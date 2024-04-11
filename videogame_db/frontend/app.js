import path from 'path'
import Game from './models/Game.js'
import GameGenre from './models/GameGenre.js'
import GameTag from './models/GameTag.js'
import Genre from './models/Genre.js'
import Reviews from './models/Reviews.js'
import Tag from './models/Tag.js'
import User from './models/User.js'
import sequelize from '../videogame_db'

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.set('trust proxy', 1)
app.use(session({
  secret: '3000',
  resave: false,
  saveUninitialized: true,
  cookie:{secure: false}
}))

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function setup() {
    try {
      // Defining one-to-many relationships between Game and Review
      Game.hasMany(Review, { foreignKey: 'game_id' });
      Reviews.belongsTo(Game, { foreignKey: 'game_id' });
      
      // Defining one-to-many relationships between User and Review
      User.hasMany(Review, { foreignKey: 'user_id' });
      Reviews.belongsTo(User, { foreignKey: 'user_id' });
      
      // Self-referencing many-to-many relationship for User Following
      User.belongsToMany(User, { as: 'Followers', through: 'Following', foreignKey: 'user_id', otherKey: 'follows_id' });
      User.belongsToMany(User, { as: 'Following', through: 'Following', foreignKey: 'follows_id', otherKey: 'user_id' });
  
      // Many-to-many relationships between Game and Genre through GameGenre
      Game.belongsToMany(Genre, { through: GameGenre, foreignKey: 'game_id' });
      Genre.belongsToMany(Game, { through: GameGenre, foreignKey: 'genre_id' });
  
      // Many-to-many relationships between Game and Tag through GameTag
      Game.belongsToMany(Tag, { through: GameTag, foreignKey: 'game_id' });
      Tag.belongsToMany(Game, { through: GameTag, foreignKey: 'tag_id' });
  
      // Optional: Define the favorite game relationship for User
      User.belongsTo(Game, { as: 'FavoriteGame', foreignKey: 'fav_game_id' });
      Game.hasMany(User, { as: 'Fans', foreignKey: 'fav_game_id' });
  
      // Synchronize all models with the database
      await sequelize.sync({ force: false }); // Use force: true with caution, as it will drop existing tables
      console.log('Database & tables created and associations established!');
    } catch (error) {
      console.error('Setup failed:', error);
    }
  }
  
  setup();
  

sequelize.sync({force:true}).then(() =>{
  console.log("Sequelize Sync Completed...");
  setup().then(()=> console.log("Signature Setup Completed... "))
})

module.exports = app;
