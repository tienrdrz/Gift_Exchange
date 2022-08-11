const { Exchange } = require('../models');

const exchangeData = [
    { user_id: 1 },
    { user_id: 1 },
    { user_id: 2 }
];

const seedExchange = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchange;