const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

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

const collection = require('./routes/mongo'); // Import MongoDB collection here

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

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

// POST route for checking email existence
app.post("/check-email", async (req, res) => {
  try {
    const { email } = req.body;
    const check = await collection.findOne({ email });
    res.json({ exists: !!check }); // Return true if user exists, false otherwise
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST route for signup
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const check = await collection.findOne({ email });
    if (check) {
      res.status(409).json({ error: 'User already exists' }); // HTTP status code 409 for conflict
    } else {
      await collection.insertOne({ email, password });
      res.status(201).json({ message: 'User created successfully' }); // HTTP status code 201 for created
    }
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Handle 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message || 'Internal server error' });
});

module.exports = app;
