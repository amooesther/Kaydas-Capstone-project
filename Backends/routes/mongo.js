const mongoose = require('mongoose');

// MongoDB URI
const mongoURI = 'mongodb://0.0.0.0:27017/login';

// MongoDB connection options
const mongoOptions = {
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(mongoURI, mongoOptions)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });

// Define user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;
