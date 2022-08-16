
const router = require('express').Router();

router.get('/contact', (req, res) => {
    res.render('contact')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
});

module.exports = router;