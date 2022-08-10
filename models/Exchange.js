const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Wishlist Model
class Exchange extends Model {
    static addMember(body, models) {
    };

    static delMember(body, models) {

    };
};

// Wishlist Model Initializer
Exchange.init(
    // Columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        owner: {
            type: DataTypes.INTEGER,
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
module.exports = Exchange;