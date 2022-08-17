require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      'gift_exchange_db', 
      'root', 
      'P9A4$1!mGi@A',
    //   'Supergeil!016', 
      {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306
      });

module.exports = sequelize;