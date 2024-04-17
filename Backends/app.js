const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const discountRouter = require('./routes/discount');
const sellerRouter = require('./routes/seller');
const chickenRouter = require('./routes/chicken');
const fishRouter = require('./routes/fish');
const chickenPartRouter = require('./routes/chickenPart');
const wholeRouter = require('./routes/whole');
const wholesaleRouter = require('./routes/wholesale');
const detailsRouter = require('./routes/details');

// Import User model
const User = require('./routes/mongo'); 

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/login', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/discount', discountRouter);
app.use('/seller', sellerRouter);
app.use('/chicken', chickenRouter);
app.use('/fish', fishRouter);
app.use('/chickenPart', chickenPartRouter);
app.use('/whole', wholeRouter);
app.use('/wholesale', wholesaleRouter);
app.use('/details', detailsRouter);

// POST route for login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Compare hashed password with the provided password
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    // Authentication successful
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Handle 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
