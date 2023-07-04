const PostService = require('../services/postService');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { user_id, content, post_date } = req.body;
    const post = await PostService.createPost(user_id, content, post_date);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get post details by ID
exports.getPost = async (req, res) => {
  try {
    const postId = req.params.post_id;
    const post = await PostService.getPost(postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update post details
exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.post_id;
    const { user_id, content, post_date } = req.body;
    const post = await PostService.updatePost(postId, user_id, content, post_date);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.post_id;
    const deletedPost = await PostService.deletePost(postId);
    if (deletedPost) {
      res.json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
