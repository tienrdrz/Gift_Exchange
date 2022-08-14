// Imports
const router = require('express').Router();

// Route imports
const apiRoutes = require('./api');
const loginRoutes = require('./login-routes');
const headerRoutes = require('./header-routes');
const footerRoutes = require('./footer-routes');

// Route links
router.use('/api', apiRoutes);
router.use('/', loginRoutes)
router.use('/', headerRoutes);
router.use('/', footerRoutes);

// Exports
module.exports = router;
