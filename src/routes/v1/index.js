const express = require('express');

const airportRoutes = require('./airport-routes');

const router = express.Router();

router.use('/airports', airportRoutes);

module.exports = router;