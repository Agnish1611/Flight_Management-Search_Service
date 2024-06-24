const express = require('express');

const airportRoutes = require('./airport-routes');
const airplaneRoutes = require('./airplane-routes');
const airlineRoutes = require('./airline-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/airports', airportRoutes);
router.use('/airplanes', airplaneRoutes);
router.use('/airlines', airlineRoutes);
router.use('/flights', flightRoutes);

module.exports = router;