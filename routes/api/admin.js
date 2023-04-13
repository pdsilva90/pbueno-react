const express = require('express');
const router = express.Router();

// Add your isAdmin middleware here
const isAdmin = require('../../config/auth').default;

router.get('/', isAdmin, (req, res) => {
  // Render your admin page here
  res.render('admin');
});

module.exports = router;