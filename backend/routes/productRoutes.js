const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    GET all products from db
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    GET a product by ID from db
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Example of creating a product (for initial data or admin)
// @desc    POST a new product
// @route   POST /api/products
// @access  Private/Admin (would add authentication later)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, imageUrl, countInStock } = req.body;
    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      countInStock
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;