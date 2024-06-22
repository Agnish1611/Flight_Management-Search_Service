const { AirportRepo } = require('../repositories/index');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class AirportService {
    constructor (){
        this.airportRepo = new AirportRepo();
    }

    async create (data) {
        try {
            const airport = await this.airportRepo.create(data);
            return airport;
        } catch (error) {
            if (error.statusCode == StatusCodes.BAD_REQUEST){
                throw error;
            }
            throw new AppError('Cannot create the airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async destroy (id) {
        try {
            const airport = await this.airportRepo.destroy(id);
            return airport;
        } catch (error) {
            if (error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot delete the airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update (id, data) {
        try {
            const airport = await this.airportRepo.update(id, data);
            return airport;
        } catch (error) {
            if (error.statusCode == StatusCodes.BAD_REQUEST || error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot update the airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async get (id) {
        try {
            const airport = await this.airportRepo.get(id);
            return airport;
        } catch (error) {
            if (error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot fetch the airport', StatusCodes.INTERNAL_SERVER_ERROR);
        }
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
            const airport = await this.airportRepo.getAll(filter);
            return airport;
        } catch (error) {
            throw new AppError('Cannot fetch the airports', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = AirportService;