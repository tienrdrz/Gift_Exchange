// Import
const router = require('express').Router();

// Model Imports
const { Item } = require('../../models');

router.get('/', (req, res) => {

    Item.findAll()
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500), json(err);
        });

});

router.post('/', (req, res) => {

    Item.create({

        item_text: req.body.item_text,
        // user_id: req.session.user_id,
        list_id: req.body.list_id

    })

        .then(dbItemData => res.json(dbItemData))
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
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id!' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Export
module.exports = router;