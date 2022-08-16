// Import
const router = require('express').Router();
const authenticated = require('../../utils/authentication');

// Model Imports
const { Exchange, ExchangeMember } = require('../../models');

// Get all Exchanges tied to the logged in user
router.get('/', authenticated, (req, res) => {
    Exchange.findAll({
        where: {
            host_id: req.session.user_id
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
        .then(exchangeData => res.json(exchangeData))
        .catch( e => { 
            console.log(e); res.status(500).json(e) 
        });
});

// Get all Exchanges related to logged in user
// Can be used to determine editable exchanges
router.get('/', authenticated, (req, res) => {
    Exchange.findAll({
        where: {
            host_id: req.session.user_id //// TO BE REPLACED WITH SESSION ID ////
        },
        include: [
            { model: ExchangeMember }
        ]
    })
        .then(exchangeData => res.json(exchangeData))
        .catch(err => {
            res.status(500).json(err);
        });
});

// Get all Exchanges logged in user is participating in
// Can be used to determine which exchange to update the list_id
router.get('/part-of', authenticated, (req, res) => {
    ExchangeMember.findAll({
        // Find exchanges user is participating in
        where: {
            member_id: req.session.user_id //// TO BE REPLACED WITH SESSION ID ////
        },
        include: [
            { model: Exchange }
        ]
    })
        .then(exchangeData => res.json(exchangeData))
        .catch(err => {
            res.status(500).json(err);
        });
});

// Get Exchange through its id
// Can be used to determine all participants and view their wishlist
router.get('/:id', (req, res) => {
    Exchange.findOne({
        where: {
            id: req.params.id 
        },
        include: [
            { model: ExchangeMember }
        ]
    })
        .then(exchangeData => {
            if (!exchangeData) {
                res.status(404).json({ message: 'no exchange found with this id' });
                return;
            };
            res.json(exchangeData);
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
});

// Create an Exchange
router.post('/', (req, res) => {
    Exchange.create({
        host_id: req.session.user_id, //// TO BE REPLACED WITH SESSION ID ////
        title: req.body.title
    })
        .then(exchangeData => res.json(exchangeData))
        .catch(e => { console.log(e); res.status(500).json(e) });
});

// Delete an Exchange
router.delete('/:id', (req, res) => {
    Exchange.destroy({ 
        where: { 
            id: req.params.id 
        } 
    })
        .then(exchangeData => {
            if (!exchangeData) {
                res.status(404).json({ message: 'no exchange found with this id' });
                return;
            }
            res.json(exchangeData);
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
});



/////////////////////
// MEMBER HANDLING //
/////////////////////

// Adds a participant to the Exchange by inserting to Exchange Member
router.put('/:id/add-member', (req, res) => {
    Exchange.addMember(req)
        .then(exchangeData => {
            if (exchangeData) {
                res.json(exchangeData);
            }
            else {
                res.status(404).json({ message: 'User already exists in Exchange' });
            }
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
});

// Deletes a participant to the Exchange by deleting from Exchange Member
router.put('/:id/del-member', (req, res) => {
    Exchange.delMember(req)
        .then(exchangeData => {
            if (!exchangeData) {
                res.status(404).json({ message: 'no user found in this exchange with this id' });
                return;
            }
            res.json(exchangeData);
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
});

// Checks if participant already belongs in exchange
router.put('/:id/', (req, res) => {
    Exchange.checkUser(req)
        .then(exchangeData => {
            if (!exchangeData) {
                return true;
            }
            res.json(exchangeData);
        })
        .catch(e => { console.log(e); res.status(500).json(e) });
    })

// Updates the wishlist displayed in the current exchange
router.put('/:id/update', (req, res) => {
    Exchange.updateList(req)
        .then(exchangeData => res.json(exchangeData))
        .catch(e => { console.log(e); res.status(500).json(e) });
});


// Export
module.exports = router;