const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Parse JSON request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/microblogging_platform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
