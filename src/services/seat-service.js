const { SeatRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const seatRepo = new SeatRepo();

class SeatService extends CrudService {
    constructor (){
        super(seatRepo);
    }

    async getAll (query, id) {
        try {
            let filter = {};
            if (query.class) {
                filter = {
                    type: query.class,
                    airplaneId: id
                }
            }
            const seats = await seatRepo.getAll(filter);
            return seats;
        } catch (error) {
            throw new AppError('Cannot fetch the seats', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = SeatService;