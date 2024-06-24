const express = require('express');

const { AirportController } = require('../../controllers');

const { validateCreateRequest } = require('../../middlewares/airport-middleware');

const router = express.Router();

// /api/v1/airport POST
router.post('/',
    validateCreateRequest,
    AirportController.createAirport);

// /api/v1/airport/:id GET
router.get('/:id', 
    AirportController.getAirport);

// /api/v1/airport?search=<name_of_location> GET
router.get('/', 
    AirportController.getAirports);

// /api/v1/airport/:id DELETE
router.delete('/:id', 
    AirportController.deleteAirport);

// /api/v1/airport/:id PATCH
router.patch('/:id', 
    AirportController.updateAirport);

module.exports = router;