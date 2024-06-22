const { AirplaneRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class AirplaneService extends CrudService {
    constructor (){
        this.airplaneRepo = new AirplaneRepo();
        super(this.airplaneRepo);
    }

    async getAll () {
        try {
            const airplanes = await this.airplaneRepo.getAll();
            return airplanes;
        } catch (error) {
            throw new AppError('Cannot fetch the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = AirlineService;