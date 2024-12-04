const express = require('express');
const router = express.Router();
const { sendRequest, acceptRequest, getFriends } = require('../controllers/friendController');

router.post('/request', sendRequest);
router.post('/accept/:id', acceptRequest);
router.get('/:id', getFriends);

module.exports = router;