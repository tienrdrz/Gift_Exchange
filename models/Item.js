const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Item Model
class Item extends Model {};

// Item Model Initializer
Item.init(
    // Columns
    {

    },
    // Model Properties
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item'
    }
);

// Export
module.exports = Item;