const router = require('express').Router();
const { stringify } = require('querystring');
const sequelize = require('sequelize');
const { User, Exchange,  Wishlist, Item, ExchangeMember } = require('../models/');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

router.get('/exchanges', (req, res) => {
    // checks if user is logged in, else redirect to login page
    if (req.session.user_id) { 
        Exchange.findAll({
            where: {
                host_id: req.session.user_id
            }
        })
        .then(exchangeData => {
            if (!exchangeData) {
                res.status(404).json({ message: 'no user found with current session id'});
            }

            const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));
            res.render('exchanges', { exchanges });
        })
        .catch( e => { 
            console.log(e); res.status(500).json(e) 
        });
    } else {
       res.redirect('/login');
    }
});

router.get('/exchange/:id', (req, res) => {
    ExchangeMember.findAll({
        where: {
            exchange_id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']        
            }
        ]
    })
    .then(memberData => {
        const member = memberData.map(member => member.get({ plain: true }));
        res.render('exchange', { member });
        console.log(member);
    })
})

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
        res.render('wishlist', { items });
    })
})

module.exports = router;