const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const ExchangeMember = require('./ExchangeMember.js');

// Wishlist Model
class Exchange extends Model {
    static addMember(req) {
        // Adds a member given their id
        return ExchangeMember.create({
            exchange_id: req.params.id,
            member_id: req.body.user_id,
        });
    };

    // Deletes member given their id
    static delMember(req) {
        return ExchangeMember.destroy({
            where: {
                exchange_id: req.params.id,
                member_id: req.body.user_id
            }
        });         
    };

    // Updates a member's wishlist given their wishlist_id they want to update to
    static updateList(req) {
        return Exchange.update({

        });
    }
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
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        host_id: {
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