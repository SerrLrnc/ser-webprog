const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const articleRoutes = require('../routes/articleRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

app.get('/api', (req, res) => {
  res.json({ message: 'API is running!' });
});

module.exports = app;