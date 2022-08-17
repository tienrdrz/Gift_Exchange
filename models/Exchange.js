const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const ExchangeMember = require('./ExchangeMember.js');
const User = require('./User.js');

// Wishlist Model
class Exchange extends Model {
    static addMember(req) {
        const exchange_id = req.params.id;
        const member_id = req.body.user_id;

        // console.log(userResponse.params.id);
        // console.log(userResponse.body.user_id);
        const chekckIfUserExists = ExchangeMember.findOne({
            where: {
                exchange_id: req.params.id,
                member_id: req.body.user_id
            }
        });

        return Promise.all([exchange_id, member_id, chekckIfUserExists])
        .then(values => {
            const exchange_id = values[0];
         
            const member_id = values[1];

            const exists = values[2];

            if (!exists) {
                console.log('User does not exist');
                // Adds a member given their id
                return ExchangeMember.create({
                    exchange_id: exchange_id,
                    member_id: member_id,
                });
            }
            else {
                return false;
            }
        });       
    };

    // Deletes member given their id
    static delMember(req) {
        return ExchangeMember.destroy({
            where: {
                exchange_id: req.params.id,
                id: req.body.exchange_member_id
            }
        });         
    };

    // Updates a member's wishlist given their wishlist_id they want to update to
    static updateList(req) {
        return Exchange.update({

        });
    }

    // Checks if user is in exchange
    static checkUser(req) {
        return ExchangeMember.findOne({
            where: {
                exchange_id: req.params.id,
                member_id: req.body.user_id
            }
        })
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
        },
        started: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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