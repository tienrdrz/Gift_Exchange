// Imports
// const router = require('express').Router();
import express from 'express';
const router = express.Router();

// Route imports
// const apiRoutes = require('./api');
import apiRoutes from './api/index.js';
import homeRoutes from './home-routes.js';


// Route links
// router.use('/api', apiRoutes);
export default router.use('/', homeRoutes);

// export router.use('/test', homeRoutes);

// Exports
// module.exports = router;
