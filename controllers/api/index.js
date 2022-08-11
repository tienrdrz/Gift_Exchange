// Imports
// const router = require('express').Router();
import express from 'express';
const router = express.Router();

// Route imports
// const userRoutes = require('./user-routes.js');
// const wishlistRoutes = require('./wishlist-routes');
// const itemRoutes = require('./item-routes');
import userRoutes from './user-routes.js'
import wishlistRoutes from './wishlist-routes.js';
import itemRoutes from './item-routes.js';

// Routing links
router.use('/users', userRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/items', itemRoutes);

// Export
// module.exports = router;
export default router;