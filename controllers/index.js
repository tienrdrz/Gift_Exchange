// Imports
const router = require('express').Router();

// Route imports
const apiRoutes = require('./api');

// Route links
router.use('/api', apiRoutes);

// Item route
const itemRoutes = require('./item-routes');

router.use('/item', itemRoutes);

// Exports
module.exports = router;