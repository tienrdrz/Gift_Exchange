const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Wishlist Model
class Exchange extends Model {
    static addMember(body, models) {
        return models.Member.create({
            exchange_id: body.exchange_id,
            user_id: body.user_id,
        });
    };

    static delMember(body, models) {
        return models.Member.destroy({
            
        })
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
        modelName: 'exchange'
    }
);

// Export
module.exports = Exchange;