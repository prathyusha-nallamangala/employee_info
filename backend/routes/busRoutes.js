const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

// Define CRUD routes for buses

// GET all buses
router.get('/', busController.getAllBuses);

// GET a single bus by ID
router.get('/:id', busController.getBusById);

// CREATE a new bus
router.post('/', busController.createBus);

// UPDATE a bus by ID
router.put('/:id', busController.updateBus);

// DELETE a bus by ID
router.delete('/:id', busController.deleteBus);

module.exports = router;
