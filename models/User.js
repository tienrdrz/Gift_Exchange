const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

// User Model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }

    // Check is user exists and returns username
    static exists(req) {
        return User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                username: req.body.username
            }
        })
    }
};

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
    {
        hooks: {
   async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10)
            return newUserData;
    },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );

// Export
module.exports = User;