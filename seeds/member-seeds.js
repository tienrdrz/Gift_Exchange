const { Member } = require('../models');

const memberData = [
    // Group 1
    { member_id: 1, exchange_id: 1, list_id: 1, gifting_to: 2 },
    { member_id: 2, exchange_id: 1, list_id: 2, gifting_to: 3 },
    { member_id: 3, exchange_id: 1, list_id: 3, gifting_to: 1 },
    // Group 2
    { member_id: 1, exchange_id: 2, list_id: 1, gifting_to: 3 },
    { member_id: 3, exchange_id: 2, list_id: 3, gifting_to: 1 }
]

const seedMembers = () => Member.bulkCreate(memberData);

module.exports = seedMembers;