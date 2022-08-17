// Determines if use is logged in our not
const authenticated = (req, res, next) => {
    // Directs user to login page if trying to access a page requiring to be logged in
    if (!req.session.user_id) {
      res.redirect('/login');
    } 
    // Proceed with code
    else {
      next();
    }
  };
  
  module.exports = authenticated;