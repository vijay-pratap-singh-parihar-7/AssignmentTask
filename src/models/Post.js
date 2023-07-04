const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  post_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
