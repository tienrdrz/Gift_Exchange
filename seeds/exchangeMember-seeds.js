const { ExchangeMember } = require('../models');

const exchangeMemberData = [
    // Group 1
    { member_id: 1, exchange_id: 1, list_id: 1, gifting_to_id: 2 },
    { member_id: 2, exchange_id: 1, list_id: 2, gifting_to_id: 3 },
    { member_id: 3, exchange_id: 1, list_id: 3, gifting_to_id: 1 },
    // Group 2
    { member_id: 1, exchange_id: 2, list_id: 1, gifting_to_id: 3 },
    { member_id: 3, exchange_id: 2, list_id: 3, gifting_to_id: 2 }
]

const seedExchangeMembers = () => ExchangeMember.bulkCreate(exchangeMemberData);

module.exports = seedExchangeMembers;