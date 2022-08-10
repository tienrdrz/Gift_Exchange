const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Member Model
class Member extends Model {};

// Member Model Initializer
Member.init(
    // Columns
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        exchange_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'exchange',
              key: 'id'
            }
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'list',
                key: 'id'
            }
        },
        gifting_to: {
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
        modelName: 'member'
    }
);

// Export
module.exports = Member;