const router = require('express').Router();
const Exchange = require('../models/Exchange');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

router.get('/exchanges', (req, res) => {
    Exchange.findAll({
        attributes: [
            'id',
            'title',
            'host_id'
        ]
    })
    .then(exchangeData => {
        const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));

        res.render('exchanges', {exchanges});
    })
});

router.get('/wishlists', (req, res) => {    
    res.render('wishlists')
});

module.exports = router;