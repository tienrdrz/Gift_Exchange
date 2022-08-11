const seedUser = require('./user-seeds');
const seedWishlist = require('./wishlist-seeds');
const seedExchange = require('./exchange-seeds');
const seedExchangeMembers = require('./exchangeMember-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();
    await seedWishlist();
    await seedExchange();
    await seedExchangeMembers();
}

seedAll();