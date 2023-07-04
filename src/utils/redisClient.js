const redis = require('redis');

// Create Redis client
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

// Handle Redis connection error
client.on('error', (error) => {
  console.error('Redis connection error', error);
});

module.exports = client;
