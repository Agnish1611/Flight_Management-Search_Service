const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class CrudService {
    constructor (repo){
        this.repo = new repo();
    }

    async create (data) {
        try {
            const response = await this.repo.create(data);
            return response;
        } catch (error) {
            if (error.statusCode == StatusCodes.BAD_REQUEST){
                throw error;
            }
            throw new AppError('Cannot create the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async destroy (id) {
        try {
            const response = await this.repo.destroy(id);
            return response;
        } catch (error) {
            if (error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot delete the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update (id, data) {
        try {
            const response = await this.repo.update(id, data);
            return response;
        } catch (error) {
            if (error.statusCode == StatusCodes.BAD_REQUEST || error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot update the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async get (id) {
        try {
            const response = await this.repo.get(id);
            return response;
        } catch (error) {
            if (error.statusCode == StatusCodes.NOT_FOUND){
                throw error;
            }
            throw new AppError('Cannot fetch the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = CrudService;