const { FlightRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const { Op } = require('sequelize');

const flightRepo = new FlightRepo();

class FlightService extends CrudService {
    constructor (){
        super(flightRepo);
    }

    async getAll (data) {
        try {
            const filter = {};
            const sort = [];
        } catch (error) {
            throw new AppError('Cannot fetch the airports', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = FlightService;