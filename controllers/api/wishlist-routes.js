// Import
const router = require('express').Router();

// Model Imports
const { Wishlist } = require('../../models');

// GET /api/wishlist (retrieves ALL the users Wishlists)
router.get('/', (req, res) => {
    //Access our Wishlist model and run .findAll() method
    Wishlist.findAll()
    .then(dbWishlistData => res.json(dbWishlistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/wishlist/1 (retrieves 1 wishlist from user)
router.get('/:id', (req, res) => {
    Wishlist.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbWishlistData => {
        if(!dbWishlistData){
            res.status(404).json({message: 'No Wishlist found with that ID'});
            return;
        }
        res.json(dbWishlistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/wishlist
router.post('/', (req, res) => {
    Wishlist.create({
        title: req.body.title,
        user_id: req.body.user_id
    })
    .then(dbWishlistData => res.json(dbWishlistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/wishlist/1
router.put('/:id', (req, res) => {
    Wishlist.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbWishlistData => {
        if(!dbWishlistData[0]){
            res.status(404).json({message: 'No Wishlist found with this ID'});
            return; 
        }
        res.json(dbWishlistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/wishlist/1
router.delete('/:id', (req, res) => {
    Wishlist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWishlistData => {
        if (!dbWishlistData) {
          res.status(404).json({ message: 'No wishlist found with this id' });
          return;
        }
        res.json(dbWishlistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



// Export
module.exports = router;