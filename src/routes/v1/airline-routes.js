const express = require('express');

const { AirlineController } = require('../../controllers');

const { validateCreateRequest } = require('../../middlewares/airline-middleware');

const router = express.Router();

// /api/v1/airline POST
router.post('/', 
    validateCreateRequest,
    AirlineController.createAirline);

// /api/v1/airline/:id GET
router.get('/:id', 
    AirlineController.getAirline);

// /api/v1/airline GET
router.get('/', 
    AirlineController.getAirlines);

// /api/v1/airline/:id DELETE
router.delete('/:id', 
    AirlineController.deleteAirline);

// /api/v1/airline/:id PATCH
router.patch('/:id', 
    AirlineController.updateAirline);

module.exports = router;