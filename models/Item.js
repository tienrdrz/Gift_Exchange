const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Item Model
class Item extends Model { };

// Item Model Initializer
Item.init(
    // Columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        url: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },

        list_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'wishlist',
                key: 'id'
            }
        }
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