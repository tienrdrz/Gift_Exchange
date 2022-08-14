const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// User Model
class User extends Model {};

// User Model Initializer
User.init(
    // Columns
    {
    // each user gets a personal id 
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },

     username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [5],
        }
    },

     password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5,20]
        }
     }  
    },
    // Model Properties
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

// Export
module.exports = User;