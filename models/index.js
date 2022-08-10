// Importing models
const User = require('./User');
const Wishlist = require('./Wishlist');
const Item = require('./Item');
const Exchange = require('./Exchange');
const Member = require('./Exchange');

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
module.exports = { User, Wishlist, Item };