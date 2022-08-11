// Importing models
const User = require('./User');
const Wishlist = require('./Wishlist');
const Item = require('./Item');
const Exchange = require('./Exchange');
const Member = require('./Member');
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

// Exchange and User associations ////////////////////////////////////////
Exchange.belongsToMany(User, { through: Member, foreignKey: 'exchange_id'});

Wishlist.belongsToMany(User, { through: Member, foreignKey: 'list_id' });
Wishlist.belongsToMany(Exchange, { through: Member, foreignKey: 'list_id' });

User.belongsToMany(Exchange, { through: Member, foreignKey: 'member_id' });
User.belongsToMany(Wishlist, { through: Member, foreignKey: 'gifting_to_id'});


// Exports
module.exports = { User, Wishlist, Item, Exchange, Member };
