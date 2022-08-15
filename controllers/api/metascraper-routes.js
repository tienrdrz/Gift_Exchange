// Import
const router = require('express').Router();
const getMetaData = require('metadata-scraper');
const { route } = require('./user-routes');

const url = 'https://www.amazon.ca/dp/B00F2C31AM/';


//GET all meta data 
router.get('/', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

//GET the title of meta data
router.get('/title', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData.title))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

//GET the description of meta data
router.get('/desc', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData.description))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

//GET the url of meta data
router.get('/url', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData.url))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

//GET the image of meta data
router.get('/image', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData.image))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

//GET the icon of meta data
router.get('/icon', (req, res) => {
    getMetaData(req.body.url)
        .then(metaData => res.json(metaData.icon))
        .catch(err => {
            console.log(err);
            res.status(500), res.json(err);
        });
});

module.exports = router;