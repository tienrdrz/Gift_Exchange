// Importing models
const User = require('./User');
const Wishlist = require('./Wishlist');
const Item = require('./Item');
const Exchange = require('./Exchange');
const ExchangeMember = require('./ExchangeMember');
const e = require('express');
const { use } = require('../controllers/api');

// User and Wishlist associations ////////////////////////////////////////
// User has many Wishlists
User.hasMany(Wishlist, { foreignKey: 'user_id' });
// Wishlists belongs to a User
Wishlist.belongsTo(User, { foreignKey: 'user_id' });

// Wish and Item associations ////////////////////////////////////////////
// Wishlist has many Items
Wishlist.hasMany(Item, { foreignKey: 'list_id' });
// Items belong to a Wishlist 
Item.belongsTo(Wishlist, { foreignKey: 'list_id' });

// User and Exchange associations ////////////////////////////////////////
// User has many exchanges
User.hasMany(Exchange, { foreignKey: 'host_id' });
// Exchange belongs to a User
Exchange.belongsTo(User, { foreignKey: 'host_id' });

// Exchange and Exchange Members associations ////////////////////////////
// Exchange has many exchange members
Exchange.hasMany(ExchangeMember, { foreignKey: 'exchange_id' });
// Members belongs to Exchange
ExchangeMember.belongsTo(Exchange, { foreignKey: 'exchange_id' });

// Exchange and User associations ////////////////////////////////////////
Exchange.belongsToMany(User, { through: ExchangeMember, foreignKey: 'exchange_id'});
Exchange.belongsToMany(Wishlist, { through: ExchangeMember, foreignKey: 'exchange_id' })

Wishlist.belongsToMany(User, { through: ExchangeMember, foreignKey: 'list_id' });
Wishlist.belongsToMany(Exchange, { through: ExchangeMember, foreignKey: 'list_id' });

User.belongsToMany(Exchange, { through: ExchangeMember, foreignKey: 'member_id' });
User.belongsToMany(Wishlist, { through: ExchangeMember, foreignKey: 'gifting_to_id' });


// Exports
module.exports = { User, Wishlist, Item, Exchange, ExchangeMember };
