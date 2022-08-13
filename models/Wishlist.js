const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Wishlist Model
class Wishlist extends Model {};

// Wishlist Model Initializer
Wishlist.init(
    // Columns
    { //defining ID column for Wishlist items
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //title cloumn 
        title: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        //user_id to connect to User account
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
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
        modelName: 'wishlist'
    }
);

// Export
module.exports = Wishlist;