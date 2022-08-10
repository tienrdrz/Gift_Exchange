const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// User Model
class Member extends Model {};

// User Model Initializer
Member.init(
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
module.exports = Member;