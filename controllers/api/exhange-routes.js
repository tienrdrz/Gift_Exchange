// Import
const router = require('express').Router();

// Model Imports
const { Exchange, ExchangeMember } = require('../../models');

// Get all Exchanges tied to the logged in user
router.get('/', (req, res) => {
    Exchange.findAll({
        where: {
            // Need to grab only the exchanges of the logged in user
            // [Call session id here]
        }
    })
        .then(exchangeData => res.json(exchangeData))
        .catch( e => { 
            console.log(e); res.status(500).json(e) 
        });
});

// Get an individual Exchange that will include all the exchange_member information
router.get('/:id', (req, res) => {
    Exchange.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: ExchangeMember,
            attributes: ['id', 'member_id', 'list_id', 'gifting_to_id']
        }
    })
});



// Export
module.exports = router;