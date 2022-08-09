const router = require('express').Router();

// go to login page
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;