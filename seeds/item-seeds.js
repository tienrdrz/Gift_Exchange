const { Item } = require('../models');

const itemData = [ 
    { name: 'Bear Mug',      url: 'https://www.amazon.ca/dp/B08DR2HVNC', list_id: 1 },
    { name: '2 x Bear Mug',  url: 'https://www.amazon.ca/dp/B08GFCCBM3', list_id: 1 },
    { name: 'Bear+Cat Mug',  url: 'https://www.amazon.ca/dp/B08GNYNFJR', list_id: 1 },
    { name: 'Bear+Duck Mug', url: 'https://www.amazon.ca/dp/B08GPL159X', list_id: 2 },
    { name: 'Cat Mug',       url: 'https://www.amazon.ca/dp/B08DQY91SS', list_id: 2 },
    { name: 'Cat+Duck Mug',  url: 'https://www.amazon.ca/dp/B08GPD46KK', list_id: 2 },
    { name: 'Bear Mug',      url: 'https://www.amazon.ca/dp/B08DR2HVNC', list_id: 3 },
    { name: '2 x Bear Mug',  url: 'https://www.amazon.ca/dp/B08GFCCBM3', list_id: 3 },
    { name: 'Bear+Cat Mug',  url: 'https://www.amazon.ca/dp/B08GNYNFJR', list_id: 3 },
    { name: 'Bear+Duck Mug', url: 'https://www.amazon.ca/dp/B08GPL159X', list_id: 4 },
    { name: 'Cat Mug',       url: 'https://www.amazon.ca/dp/B08DQY91SS', list_id: 4 },
    { name: 'Cat+Duck Mug',  url: 'https://www.amazon.ca/dp/B08GPD46KK', list_id: 4 },
    { name: 'Bear Mug',      url: 'https://www.amazon.ca/dp/B08DR2HVNC', list_id: 5 },
    { name: '2 x Bear Mug',  url: 'https://www.amazon.ca/dp/B08GFCCBM3', list_id: 5 },
    { name: 'Bear+Cat Mug',  url: 'https://www.amazon.ca/dp/B08GNYNFJR', list_id: 5 },
    { name: 'Bear+Duck Mug', url: 'https://www.amazon.ca/dp/B08GPL159X', list_id: 6 },
    { name: 'Cat Mug',       url: 'https://www.amazon.ca/dp/B08DQY91SS', list_id: 6 },
    { name: 'Cat+Duck Mug',  url: 'https://www.amazon.ca/dp/B08GPD46KK', list_id: 6 },
    { name: 'Bear Mug',      url: 'https://www.amazon.ca/dp/B08DR2HVNC', list_id: 7 },
    { name: '2 x Bear Mug',  url: 'https://www.amazon.ca/dp/B08GFCCBM3', list_id: 7 },
    { name: 'Bear+Cat Mug',  url: 'https://www.amazon.ca/dp/B08GNYNFJR', list_id: 7 },
    { name: 'Bear+Duck Mug', url: 'https://www.amazon.ca/dp/B08GPL159X', list_id: 8 },
    { name: 'Cat Mug',       url: 'https://www.amazon.ca/dp/B08DQY91SS', list_id: 8 },
    { name: 'Cat+Duck Mug',  url: 'https://www.amazon.ca/dp/B08GPD46KK', list_id: 8 }
    
];

const seedItem = () => Wishlist.bulkCreate(itemData);

module.exports = seedItem;
