const { AirlineRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const airlineRepo = new AirlineRepo();

class AirlineService extends CrudService {
    constructor (){
        super(airlineRepo);
    }

    async getAll () {
        try {
            const airlines = await airlineRepo.getAll();
            return airlines;
        } catch (error) {
            throw new AppError('Cannot fetch the airlines', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = AirlineService;