// Imports
// const router = require('express').Router();
import express from 'express';
const router = express.Router();

// Route imports
// const apiRoutes = require('./api');
import apiRoutes from './api/index.js';


// Route links
// router.use('/api', apiRoutes);
export default router.use('/api', apiRoutes);

// Exports
// module.exports = router;
