const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/exchanges', (req, res) => {
    res.render('exchanges', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/wishlists', (req, res) => {
    res.render('wishlists', {
        loggedIn: req.session.loggedIn
    })
});

module.exports = router;