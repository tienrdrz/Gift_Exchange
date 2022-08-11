// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection.js');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

// Wishlist Model
export default class Wishlist extends Model {};

// Wishlist Model Initializer
Wishlist.init(
    // Columns
    {

    },
    // Model Properties
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'wishlist'
    }
);

// Export
// module.exports = Wishlist;