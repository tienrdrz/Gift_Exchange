const { Wishlist } = require('../models');

const wishlistData = [
    { title: 'Joyce\'s Wishlist 1', user_id: '1' },
    { title: 'Joyce\'s Wishlist 2', user_id: '1' },
    { title: 'Etienne\'s Wishlist 1', user_id: '2' },
    { title: 'Etienne\'s Wishlist 2', user_id: '2' },
    { title: 'Michelle\'s Wishlist 1', user_id: '3' },
    { title: 'Michelle\'s Wishlist 2', user_id: '3' },
    { title: 'Michael\'s Wishlist 1', user_id: '4' },
    { title: 'Michael\'s Wishlist 2', user_id: '4' }
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;