const express = require('express');
const router = express.Router();
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');

router.post('/create', createPost);
router.get('/', getPosts);
router.post('/like/:id', likePost);
router.post('/comment/:id', commentOnPost);

module.exports = router;