const express = require('express');
const cors = require('cors');

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
app.listen(PORT, () => console.log(`FarmConnect API running on port ${PORT}`));
  