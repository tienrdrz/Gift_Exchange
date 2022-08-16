const router = require('express').Router();
const { stringify } = require('querystring');
const sequelize = require('sequelize');
const { User, Exchange,  Wishlist, Item, ExchangeMember } = require('../models/');
const Promise = require('bluebird');

router.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn })
});

router.get('/exchanges', (req, res) => {
    // checks if user is logged in, else redirect to login page
    if (req.session.user_id) { 
        const getExchange = Exchange.findAll({
            where: {
                host_id: req.session.user_id
            }
        });

        const getMemberOf = ExchangeMember.findAll({
            where: {
                member_id: req.session.user_id
            },
            // include: [
            //     {
            //         model: Exchange,
            //         include: ['id', 'title', 'started']
            //     }
            // ]
        });

        Promise.all([getExchange, getMemberOf]).then(responseData => {
            const exchangeData = responseData[0];
            const memberOfData = responseData[1];

            console.log(memberOfData);

            if (!exchangeData || !memberOfData) {
                res.status(404).json({ message: 'no user found with current session id'});
                return;
            }

            const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));
            const memberOf = memberOfData.map(memberOf => memberOf.get({ plain: true }));
            res.render('exchanges', { exchanges, memberOf, loggedIn: true });
        })
        // .then(exchangeData => {
        //     if (!exchangeData) {
        //         res.status(404).json({ message: 'no user found with current session id'});
        //     }

        //     const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));
        //     res.render('exchanges', { exchanges , loggedIn: true });
        // })
        // .catch( e => { 
        //     console.log(e); res.status(500).json(e) 
        // });
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
        res.render('exchange', { member, loggedIn: req.session.loggedIn });
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