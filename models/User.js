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
    // paramaters to create an account
     first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
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