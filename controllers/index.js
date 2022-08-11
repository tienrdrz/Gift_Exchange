// Imports
const router = require('express').Router();

// Route imports
const apiRoutes = require('./api');

// Route links
router.use('/api', apiRoutes);

// Exports
module.exports = router;