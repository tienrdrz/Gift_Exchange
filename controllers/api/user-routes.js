// Imports
const router = require('express').Router();

const e = require('express');
const { response } = require('express');
// Model Imports
const { User } = require('../../models');

//GET all users (maybe but included for now)
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }, 
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//GET individual user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'The user you are trying to reach does not exist'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//PUT to update user info(not necessary but ready to be added)

//DELETE to delete your account
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'The user you are trying to delete does not exist'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//POST a new user
router.post('/', (req, res) => {
    //expects: username, password
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}) 

//DELETE to delete your account
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'The user you are trying to delete does not exist'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//POST to login to account
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {

        // console.log(dbUserData);

        if (!dbUserData) {
            res.status(400).json({ message: 'This username does not match an existing user.'});
            return;
       }

       const validPassword = dbUserData.checkPassword(req.body.password);

       if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password. Try again.'});
        return;
       }

       req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You have successfully logged in!'})
       });
    });
});

//POST to logout of account
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
});


// Reques to see if user exists given username
router.put('/exists', (req, res) => {
    User.exists(req)
        .then(userData => {
            if (!userData) { 
                res.status(400).json({ message: ' user does not exist'})
                return;
            }
            res.json(userData);
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
})

// Export
module.exports = router;

//FOR HOMEPAGE, maybe add marquee?