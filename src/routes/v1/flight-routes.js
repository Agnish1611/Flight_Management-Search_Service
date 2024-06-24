const express = require('express');

const { FlightController } = require('../../controllers');

const router = express.Router();

// /api/v1/airports POST
router.post('/', 
    FlightController.createFlight);

// /api/v1/airports/:id GET
router.get('/:id', 
    FlightController.getFlight);

// /api/v1/airports GET
router.get('/', 
    FlightController.getFlights);

// /api/v1/airports/:id DELETE
router.delete('/:id', 
    FlightController.deleteFlight);

// /api/v1/airports/:id PATCH
router.patch('/:id', 
    FlightController.updateFlight);

module.exports = router;