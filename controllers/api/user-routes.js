// Imports
const router = require('express').Router();

// Model Imports
const { User } = require('../../models');

//GET all users (maybe but included for now)
router.get('/', (req, res) => {
    User.findAll()
    /*attributes: { exclude: ['password'] }, 
      where: {
        id: req.params.id
      }
    */
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//GET individual user
router.get('/:id', (req, res) => {
    User.findOne({
        //attributes: { exclude: ['password'] },
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

//POST a new user
router.post('/', (req, res) => {
    //expects: first_name, last_name, password
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

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

});

//POST to logout of account
router.post('/', (req, res) => {

});

// Export
module.exports = router;