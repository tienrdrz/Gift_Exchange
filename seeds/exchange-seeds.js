const { Exchange } = require('../models');

const exchangeData = [
    { owner: 1 },
    { owner: 1 },
    { owner: 2 }
];

const seedExchange = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchange;