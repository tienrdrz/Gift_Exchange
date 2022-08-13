const { User } = require('../models');

const userData = [
    { username: 'jcgcristel', password: 'joyce' },
    { username: 'tienrdrz', password: 'etienne' },
    { username: 'amuodmi',  password: 'michelle' },
    { username: 'mycodesu', password: 'michael'}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;