const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const apiRoutes = require('./routes');

const setupServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT ${PORT}`);
    });
}

setupServer();