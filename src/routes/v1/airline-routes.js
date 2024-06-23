const express = require('express');

const { AirlineController } = require('../../controllers');

const router = express.Router();

// /api/v1/airlines POST
router.post('/', 
    AirlineController.createAirline);

// /api/v1/airlines/:id GET
router.get('/:id', 
    AirlineController.getAirline);

// /api/v1/airlines GET
router.get('/', 
    AirlineController.getAirlines);

// /api/v1/airlines/:id DELETE
router.delete('/:id', 
    AirlineController.deleteAirline);

// /api/v1/airlines/:id PATCH
router.patch('/:id', 
    AirlineController.updateAirline);

module.exports = router;