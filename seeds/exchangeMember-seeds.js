const { ExchangeMember } = require('../models');

const exchangeMemberData = [
    { member_id: 1, exchange_id: 1 },
    { member_id: 2, exchange_id: 1 },
    { member_id: 3, exchange_id: 1 },
    { member_id: 4, exchange_id: 1 },

    { member_id: 1, exchange_id: 2 },
    { member_id: 2, exchange_id: 2 },
    { member_id: 3, exchange_id: 2 },
    { member_id: 4, exchange_id: 2 },
    
    { member_id: 1, exchange_id: 3 },
    { member_id: 2, exchange_id: 3 },
    { member_id: 3, exchange_id: 3 },
    { member_id: 4, exchange_id: 3 },

    { member_id: 1, exchange_id: 4 },
    { member_id: 2, exchange_id: 4 },
    { member_id: 3, exchange_id: 4 },
    { member_id: 4, exchange_id: 4 },

    { member_id: 1, exchange_id: 5 },
    { member_id: 2, exchange_id: 5 },

    { member_id: 3, exchange_id: 6 },
    { member_id: 4, exchange_id: 6 },

    { member_id: 1, exchange_id: 7 },
    { member_id: 2, exchange_id: 7 },

    { member_id: 3, exchange_id: 8 },
    { member_id: 4, exchange_id: 8 },
]

const seedExchangeMembers = () => ExchangeMember.bulkCreate(exchangeMemberData);

module.exports = seedExchangeMembers;