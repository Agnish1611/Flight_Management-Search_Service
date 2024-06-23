const { AirportRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const { Op } = require('sequelize');

const airportRepo = new AirportRepo();

class AirportService extends CrudService {
    constructor (){
        super(airportRepo);
    }

    async getAll (data) {
        try {
            let filter = {}
            if (data.search) {
                filter = {
                    address: {
                        [Op.substring]: data.search
                    }
                }
            }
            const airport = await airportRepo.getAll(filter);
            return airport;
        } catch (error) {
            throw new AppError('Cannot fetch the airports', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = AirportService;