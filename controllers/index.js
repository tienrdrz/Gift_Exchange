// Imports
const router = require('express').Router();

// Route imports
const apiRoutes = require('./api');

// Route links
router.use('/', apiRoutes);

// Exports
module.exports = router;