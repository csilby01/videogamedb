const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/sigdb1.sqlite'
})

module.exports = sequelize