import Sequelize from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/VideoGameDB.sqlite'
})

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
    // Here you can also insert initial data if needed
  })
  .catch(err => console.log('Error: ' + err));

export default sequelize