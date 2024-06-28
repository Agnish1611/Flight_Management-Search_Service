const express = require('express');

const { SeatController } = require('../../controllers');

const router = express.Router();

// /api/v1/seat POST
router.post('/',
    SeatController.createSeat);

// /api/v1/seat/:airplaneId?class=<economy, premium-economy, business, first-class> GET
router.get('/:id', 
    SeatController.getSeats);

// /api/v1/seat/:id DELETE
router.delete('/:id', 
    SeatController.deleteSeat);

// /api/v1/seat/:id PATCH
router.patch('/:id', 
    SeatController.updateSeat);

module.exports = router;