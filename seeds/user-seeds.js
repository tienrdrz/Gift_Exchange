const { User } = require('../models');

const userData = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;