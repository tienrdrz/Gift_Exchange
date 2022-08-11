// Importing models
// const User = require('./User');
// const Wishlist = require('./Wishlist');
// const Item = require('./Item');
import User from './User.js';
import Wishlist from './Wishlist.js';
import Item from './Item.js';

// User and Wishlist associations ///////////////
// User has many Wishlists
User.hasMany(Wishlist, {
    foreignKey: 'user_id'
});
// Wishlists belongs to a User
Wishlist.belongsTo(User, {
    foreignKey: 'user_id'
});

// Wish and Item associations ///////////////////
// Wishlist has many Items
Wishlist.hasMany(Item, {
    foreignKey: 'list_id'
});
// Items belong to a Wishlist 
Item.belongsTo(Wishlist, {
    foreignKey: 'list_id'
});


// Exports
export { User, Wishlist, Item };