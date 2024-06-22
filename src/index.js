const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const apiRoutes = require('./routes');
const db = require('./models');

const { Sequelize } = require('sequelize');

const { Flight, Airplane, Airport } = require('./models/index');

const setupServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT ${PORT}`);

        // const response = await Flight.findAll({
        //     where: {
        //         departureAirportId: 4,
        //         arrivalAirportId: 1
        //     },
        //     include: [
        //         {
        //             model: Airplane,
        //             required: true,
        //             as: 'airplaneDetail',
        //             attributes: ['modelNo']
        //         },
        //         {
        //             model: Airport,
        //             required: true,
        //             as: 'departureAirport',
        //             attributes: ['name']
        //         },
        //         {
        //             model: Airport,
        //             required: true,
        //             as: 'arrivalAirport',
        //             attributes: ['name']
        //         }
        //     ]
        // });

        // console.log(response);
    });
}

setupServer();