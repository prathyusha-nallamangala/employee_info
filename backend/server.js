require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Enable CORS

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));