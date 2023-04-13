const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items.js');
const isAdmin = require('../../config/auth').default;

// const isAdmin = require('../../middleware/auth');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

router.post('/', isAdmin, itemsCtrl.createItem);
router.put('/:id', isAdmin, itemsCtrl.updateItem);
router.delete('/:id', isAdmin, itemsCtrl.deleteItem);




module.exports = router;

// router.get('/admin', isAdmin, (req, res) => {
//     res.json('Welcome Admin!');
// });