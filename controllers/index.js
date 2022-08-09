// Imports
const router = require('express').Router();

// Route imports
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// Route links
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

// Exports
module.exports = router;