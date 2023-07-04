const User = require('../models/User');

exports.createUser = async (username, email, password) => {
  const user = new User({ username, email, password });
  return user.save();
};

exports.getUser = async (userId) => {
  return User.findById(userId);
};

exports.updateUser = async (userId, username, email, password) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }
  user.username = username;
  user.email = email;
  user.password = password;
  return user.save();
};
