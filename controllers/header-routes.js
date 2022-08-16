const router = require('express').Router();
const sequelize = require('sequelize');
const { Exchange,  Wishlist, Item } = require('../models/');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

router.get('/exchanges', (req, res) => {
    Exchange.findAll()
    .then(exchangeData => {
        const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));
        res.render('exchanges', { exchanges });
    })
});

router.get('/wishlists', (req, res) => {    
    res.render('wishlists')
});

router.get('/wishlist/:id', (req, res) => {
    Item.findAll({
        where: {
            list_id: req.params.id
        },
        include: [
            {
                model: Wishlist,
                attributes: ['id', 'title', 'user_id']
            }
        ]
    })
    .then(itemData => {    
        const items = itemData.map(item => item.get({ plain: true }));
        const list_title = items[0].wishlist.title;
        res.render('wishlist', { items, list_title });
    })
})

module.exports = router;