// require('dotenv').config();

// const Sequelize = require('sequelize');

import dotenv from 'dotenv';
dotenv.config();

import Sequelize from 'sequelize';

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME, 
      process.env.DB_USER, 
      process.env.DB_PASSWORD, {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306
      });

// modules.export = sequelize;
export default sequelize;