const express = require('express');

const airportRoutes = require('./airport-routes');
const airplaneRoutes = require('./airplane-routes');
const airlineRoutes = require('./airline-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/airport', airportRoutes);
router.use('/airplane', airplaneRoutes);
router.use('/airline', airlineRoutes);
router.use('/flight', flightRoutes);

module.exports = router;