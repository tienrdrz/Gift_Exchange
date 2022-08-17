const router = require('express').Router();
const { stringify } = require('querystring');
const sequelize = require('sequelize');
const { User, Exchange,  Wishlist, Item, ExchangeMember } = require('../models/');
const Promise = require('bluebird');
const { resourceLimits } = require('worker_threads');

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

        const getMemberOf =  User.findAll({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.session.user_id
            },
            include: [
                { 
                    model: Exchange,
                    attributes: ['id', 'title'],
                    through: ExchangeMember
                }
            ]
        })
        Promise.all([getExchange, getMemberOf]).then(data => {
            const exchangeData = data[0];
            const memberData = data[1];
            
            if (!exchangeData || !memberData) {
                res.status(404).json({ message: 'no user found with current session id'});
                return;
            }           

            const exchanges = exchangeData.map(exchange => exchange.get({ plain: true }));
            const member = memberData.map(memberOf => memberOf.get({ plain: true }));
            const memberOf = member[0].exchanges;

            res.render('exchanges', { exchanges, memberOf, loggedIn: true });
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
            res.render('exchange', { member, loggedIn: req.session.loggedIn });
        })
})

router.get('/exchange/:id/view-exchange', (req, res) => {  
    // Getting Title 
    const exchangeData = Exchange.findOne({
        where: {
            id: req.params.id,
        }
    })
    
    const memberData = ExchangeMember.findAll({
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

    Promise.all([req.session.user_id, exchangeData, memberData])
    .then(data => {
        const user_id = data[0];
        const exchange = data[1];
        const memberData = data[2];

        // Filter results logged in user's gift to and current list
        var user = memberData.filter(member => member.member_id == user_id);
        var giftTo = memberData.filter(member => member.member_id == user[0].gifting_to_id);
        
        const members = memberData.map(member => member.get({ plain: true }));

console.log(`===========================================

${JSON.stringify(giftTo)}

===========================================


       
        
===========================================`);
    
        res.render('view-exchange', { title: exchange.title, members, loggedIn: req.session.loggedIn });
    })
})


router.get('/wishlists', (req, res) => {   
    if (req.session.user_id){
      Wishlist.findAll({   
        where: {
            user_id: req.session.user_id
        } 
    })   
        .then(wishlistData => {
            if(!wishlistData){
                res.status(404).json({message: 'no wishlist found with this id'});
            }
        const wishlists = wishlistData.map(wishlist => wishlist.get ({plain: true}));
    res.render('wishlists', { wishlists, loggedIn: req.session.user_id });
    })
    .catch (e=> {
        console.log(e); res.status(500).json(e)
    });
    
} else {
    res.redirect('/login');
}


router.get('/wishlist/:id', (req, res) => {
    if (req.session.user_id) {
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
                if (!itemData) {
                    res.status(404).json({ message: 'no item found with current session id' });
                }

                const items = itemData.map(item => item.get({ plain: true }));
                res.render('wishlist', { items, loggedIn: true});
            })
            .catch(e => {
                console.log(e); res.status(500).json(e)
            });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;