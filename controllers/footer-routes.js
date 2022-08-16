
const router = require('express').Router();

router.get('/contact', (req, res) => {
    res.render('contact', { loggedIn: req.session.loggedIn })
});

router.get('/about', (req, res) => {
    res.render('about', { loggedIn: req.session.loggedIn })
});

router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy', { loggedIn: req.session.loggedIn })
});

module.exports = router;