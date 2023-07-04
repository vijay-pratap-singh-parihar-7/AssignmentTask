const Post = require('../models/Post');

exports.createPost = async (user_id, content, post_date) => {
  const post = new Post({ user_id, content, post_date });
  return post.save();
};

exports.getPost = async (postId) => {
  return Post.findById(postId);
};

exports.updatePost = async (postId, user_id, content, post_date) => {
  const post = await Post.findById(postId);
  if (!post) {
    return null;
  }
  post.user_id = user_id;
  post.content = content;
  post.post_date = post_date;
  return post.save();
};

exports.deletePost = async (postId) => {
  return Post.findByIdAndDelete(postId);
};
