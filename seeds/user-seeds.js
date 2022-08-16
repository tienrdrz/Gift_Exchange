const { User } = require('../models');

const userData = [
    // joyce
    { username: 'jcgcristel', password: '$2b$10$6nZf1c0AXiJrn0yEM5JThekKCmtXRnSQuidM8S8dgWEabAorn5HV.' }, 
    // etienne
    { username: 'tienrdrz', password: '$2b$10$qWYt7ewPOyvtPTh/aHpNx.56eMYSomJgxka46WLJnwv/CAvd.SizO' },
    // michelle
    { username: 'amuodmi',  password: '$2b$10$hvKcO9TGiNilg05wKk5FxOKPsoIsNJrJPdFSkp9rL2UT1VVMF2iNS' }, 
    // michael
    { username: 'mycodesu', password: '$2b$10$kr21KxTtozPyNmLlRSqiwObTmhe7QyR.qwR9SBjjJ7EAe2F/Uad2.'}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;