require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      "gift_exchange_db", 
      "root", 
      "Supergeil!016", {
          host: '127.0.0.1',
          dialect: 'mysql',
          port: 3306
      });

module.exports = sequelize;