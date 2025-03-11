const express = require('express');
const router = express.Router();
const { calculateFriendship, getAllEntries, deleteEntry } = require('../controllers/friendshipController');

router.post('/calculate', calculateFriendship);
router.get('/getAll', getAllEntries);
router.delete('/delete/:id', deleteEntry);


module.exports = router;
