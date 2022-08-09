const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// User Model
class User extends Model {};

// User Model Initializer
User.init(
    // Columns
    {

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