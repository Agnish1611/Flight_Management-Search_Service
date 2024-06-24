const express = require('express');

const { FlightController } = require('../../controllers');

const { validateCreateRequest, validateGetRequest} = require('../../middlewares/flight-middleware');

const router = express.Router();

// /api/v1/flight POST
router.post('/', 
    validateCreateRequest,
    FlightController.createFlight);

// /api/v1/flight/:id GET
router.get('/:id', 
    FlightController.getFlight);

// /api/v1/flight?trip=<dept_airport_code>-<arr_airport_code>&date=<date>&arrivalTime<MOR/NOO/EVE/NIG>&departureTime<MOR/NOO/EVE/NIG>&minPrice=<min_price>&maxPrice=<max_price>&sort=<attr1_ASC/DESC,attr2_ASC/DESC,...> GET
router.get('/', 
    validateGetRequest,
    FlightController.getFlights);

// /api/v1/flight/:id DELETE
router.delete('/:id', 
    FlightController.deleteFlight);

// /api/v1/flight/:id PATCH
router.patch('/:id', 
    FlightController.updateFlight);

module.exports = router;