const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
