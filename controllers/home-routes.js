const router = require('express').Router();

// go to login
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

    res.render('login')
  });

// go to signup
router.get('/signup', (req, res) => {
    res.render('signup');
  });  

module.exports = router;