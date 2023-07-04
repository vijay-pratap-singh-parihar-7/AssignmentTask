const UserService = require('../services/userService');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserService.createUser(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get user details by ID
exports.getUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const user = await UserService.getUser(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const { username, email, password } = req.body;
    const user = await UserService.updateUser(userId, username, email, password);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
