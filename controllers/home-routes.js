const router = require('express').Router();

// go to login
router.get('/login', (req, res) => {
    res.render('login', {
      id: 1,
      first_name: 'Etienne',
      last_name: 'Rodriguez'
    })
  });

// go to signup
router.get('/signup', (req, res) => {
    res.render('signup');
  });  

module.exports = router;