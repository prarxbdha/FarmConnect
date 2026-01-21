const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const farmers = [
  { id: 1, name: 'Ramesh', location: 'Bellandur', produce: 'Tomatoes' },
  { id: 2, name: 'Lakshmi', location: 'Hebbal', produce: 'Leafy greens' }
];

app.get('/api/farmers', (req, res) => {
  res.json(farmers);
});

const PORT = 5000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    app.listen(5000, () => {
      console.log('FarmConnect API running on port 5000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas', err);
  });


  