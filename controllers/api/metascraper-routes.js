// Import
const router = require('express').Router();
const getMetaData = require('metadata-scraper');
const { route } = require('./user-routes');

const url = 'https://www.amazon.ca/dp/B00F2C31AM/';


//GET all users (maybe but included for now)
router.get('/', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

module.exports = router;