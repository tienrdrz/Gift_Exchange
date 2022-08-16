const bcrypt = require('bcrypt');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('test', salt, function(err, hash) {
    // returns hash
    console.log(hash);
    });
});
