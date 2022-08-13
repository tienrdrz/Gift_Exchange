const { Wishlist } = require('../models');

const wishlistData = [
    { user_id: 1 },
    { user_id: 2 },
    { user_id: 3 },
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;