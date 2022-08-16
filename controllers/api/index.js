// Imports
const router = require('express').Router();

// Route imports
const userRoutes = require('./user-routes.js');
const wishlistRoutes = require('./wishlist-routes');
const itemRoutes = require('./item-routes');
const exchangeRoutes = require('./exhange-routes');

// Routing links
router.use('/users', userRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/items', itemRoutes);
router.use('/exchanges', exchangeRoutes);

// Export
module.exports = router;