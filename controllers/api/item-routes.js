// Import
const router = require('express').Router();

// Model Imports
const { Item } = require('../../models');

router.get('/', (req, res) => {

    Item.findAll()
        .then(itemData => res.json(itemData))
        .catch(err => {
            console.log(err);
            res.status(500), json(err);
        });

});

router.post('/', (req, res) => {

    Item.create({

        name: req.body.name,
        url: req.body.url,
        user_id: req.session.user_id,
        list_id: req.body.list_id

    })

        .then(itemData => res.json(itemData))
        .catch(err => {
            console.log(err);
            resizeBy.status(400).json(err);

        });

});



router.delete('/:id', (req, res) => {

    Item.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(itemData => {
            if (!itemData) {
                res.status(404).json({ message: 'No item found with this id!' });
                return;
            }
            res.json(itemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Export
module.exports = router;