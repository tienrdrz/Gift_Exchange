const { Member } = require('../models');

const memberData = [
    {
        member_id: 1,
        exchange_id: 1
    },
    {
        member_id: 2,
        exchange_id: 1,
    },
    {
        member_id: 3,
        exchange_id: 1,
    }
]

const seedMembers = () => Member.bulkCreate(memberData);