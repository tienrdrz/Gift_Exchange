const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

router.get('/exchanges', (req, res) => {
    res.render('exchanges')
});

router.get('/wishlists', (req, res) => {
    res.render('wishlists')
});

module.exports = router;