const { AirplaneRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const airplaneRepo = new AirplaneRepo();

class AirplaneService extends CrudService {
    constructor (){
        super(airplaneRepo);
    }

    async getAll () {
        try {
            const airplanes = await airplaneRepo.getAll();
            return airplanes;
        } catch (error) {
            throw new AppError('Cannot fetch the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = AirplaneService;