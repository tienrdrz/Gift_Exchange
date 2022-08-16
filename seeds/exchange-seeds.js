const { Exchange } = require('../models');

const exchangeData = [
    { title: 'Joyce\'s Exchange', host_id: 1 },
    { title: 'Etienne\'s Exchange', host_id: 2 },
    { title: 'Michelle\'s Exchange', host_id: 3 },
    { title: 'Michael\'s Exchange', host_id: 4 },
    { title: 'Joyce\'s Other Exchange', host_id: 1 },
    { title: 'Etienne\'s Other Exchange', host_id: 2 },
    { title: 'Michelle\'s Other Exchange', host_id: 3 },
    { title: 'Michael\'s Other Exchange', host_id: 4 }
];

const seedExchange = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchange;