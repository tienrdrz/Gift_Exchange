const { Exchange } = require('../models');

const exchangeData = [
    { title: 'Exchange 1', host_id: 1 },
    { title: 'Exchange 2', host_id: 1 },
    { title: 'Exchange 3', host_id: 2 }
];

const seedExchange = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchange;