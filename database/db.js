const Sequelize = require('sequelize')
const dbConfig = require("../db.config");


const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST, 
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT
    }
)

module.exports = sequelize;