const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class CrudRepo {
    constructor (model){
        this.model = model;
    }

    async create (data) {
        try {
            const response = await this.model.bulkCreate(data);
            return response;
        } catch (error) {
            if (error.name.substring(0,9) == "Sequelize"){
                const message = [];
                error.errors.forEach(element => {
                    message.push(element.message);
                });
                throw new AppError(message, StatusCodes.BAD_REQUEST);
            }
            throw error;
        }
    }

    async destroy (id) {
        try {
            const resource = await this.model.findByPk(id);
            if (resource == null) {
                throw new AppError(`Not able to find the resource`, StatusCodes.NOT_FOUND);
            }
            await this.model.destroy({
                where: {
                    id: id
                }
            });
            return resource;
        } catch (error) {
            throw error;
        }
    }

    async update (id, data) {
        try {
            const resource = await this.model.findByPk(id);
            if (resource == null) {
                throw new AppError(`Not able to find the resource`, StatusCodes.NOT_FOUND);
            }
            await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return await this.model.findByPk(id);
        } catch (error) {
            if (error.name.substring(0,9) == "Sequelize"){
                const message = [];
                error.errors.forEach(element => {
                    message.push(element.message);
                });
                throw new AppError(message, StatusCodes.BAD_REQUEST);
            }
            throw error;
        }
    }

    async get (id) {
        try {
            const response = await this.model.findByPk(id);
            if (response == null) {
                throw new AppError(`Not able to find the resource`, StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CrudRepo;