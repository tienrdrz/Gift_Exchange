// Imports
const router = require('express').Router();

// Model Imports
const { User } = require('../../models');

//GET all users (maybe but included for now)
router.get('/', (req, res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//GET individual user
router.get('/:id', (req, res) => {
    User.findOne({
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

//POST a new user
router.post('/', (req, res) => {
    //expects: first_name, last_name, password
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
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

//DELETE to delete your account
router.delete('/', (req, res) => {

});

// Export
module.exports = router;