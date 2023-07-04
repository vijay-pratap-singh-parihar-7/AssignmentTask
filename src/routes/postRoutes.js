const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

router.post('/', PostController.createPost);
router.get('/:post_id', PostController.getPost);
router.put('/:post_id', PostController.updatePost);
router.delete('/:post_id', PostController.deletePost);

module.exports = router;
