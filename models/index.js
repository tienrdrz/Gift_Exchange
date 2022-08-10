// Importing models
const User = require('./User');
const Wishlist = require('./Wishlist');
const Item = require('./Item');
const Exchange = require('./Exchange');
const Member = require('./Member');

// User and Wishlist associations ////////////////////////////////////////
// User has many Wishlists
User.hasMany(Wishlist, { foreignKey: 'member_id' });
// Wishlists belongs to a User
Wishlist.belongsTo(User, { foreignKey: 'member_id' });

// Wish and Item associations ////////////////////////////////////////////
// Wishlist has many Items
Wishlist.hasMany(Item, { foreignKey: 'list_id' });
// Items belong to a Wishlist 
Item.belongsTo(Wishlist, { foreignKey: 'list_id' });

// Exchange and User associations ////////////////////////////////////////
// Exchange belongs to a user
Exchange.belongsTo(User, { foreignKey: 'owner' });
// User has many Exchanges
User.hasMany(Exchange, { foreignKey: 'owner' });

// Member as a junction table with Exchange, Users, Wishlist ////////////
// Member belongs to many Exchanges, Users, Wishlists, User(Gift)
Member.belongsTo(Exchange, { foreignKey: 'exchange_id' });
Member.belongsTo(User, { foreignKey: 'member_id' });
Member.belongsTo(Wishlist, { foreignKey: 'list_id' });
Member.belongsTo(User, { foreignKey: 'gifting_to' });
// Exchange, Users, Wishlist, User(Gift) have many Members 
Exchange.hasMany(Member, { foreignKey: 'exchange_id' });
User.hasMany(Member, { foreignKey: 'member_id' });
Wishlist.hasMany(Member, { foreignKey: 'list_id' });
User.hasMany(Member, { foreignKey: 'gifting_to' });
// Exchanges belongs to User, Wishlist, User(Gift) through Member
Exchange.belongsToMany(User, { through: Member, as: 'exchange_members', foreignKey: 'member_id' });
Exchange.belongsToMany(Wishlist, { through: Member, as: 'exchange_lists', foreignKey: 'list_id' });
Exchange.belongsToMany(User, { through: Member, as: 'exchange_gifting', foreignKey: 'gifting_to' });
// Users belongs to Exchange, Wishlist, User(Gift)
User.belongsToMany(Exchange, { through: Member, as: 'exchange_members', foreignKey: 'exchange_id' });
User.belongsToMany(Wishlist, { through: Member, as: 'user_list', foreignKey: 'list_id' });
User.belongsToMany(User, { through: Member, as: 'user_gifting', foreignKey: 'gifting_to' });
// Wishlists belongs to Exchange, User, User(Gift);
Wishlist.belongsToMany(Exchange, { through: Member, as: 'exchange_list', foreignKey: 'exchange_id' });
Wishlist.belongsToMany(User, { through: Member, as: 'user_list', foreignKey: 'member_id' });
Wishlist.belongsToMany(User, { through: Member, as: 'list_gifting', foreignKey: 'gifting_to' });
// Users(Gift) belongs to Exchange, User, Wishlist
User.belongsToMany(Exchange, { through: Member, as: 'exchange_gifting', foreignKey: 'exchange_id' });
User.belongsToMany(User, { through: Member, as: 'gifting_user', foreignKey: 'member_id' });
User.belongsToMany(Wishlist, { through: Member, as: 'list_gifting', foreignKey: 'list_id' });

// Exports
module.exports = { User, Wishlist, Item, Exchange, Member };