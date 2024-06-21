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
            const airport = await this.model.findByPk(id);
            await this.model.destroy({
                where: {
                    id: id
                }
            });
            if (airport == null) {
                throw new AppError(`Not able to find the resource`, StatusCodes.NOT_FOUND);
            }
            return airport;
        } catch (error) {
            throw error;
        }
    }

    async update (id, data) {
        try {
            const airport = await this.model.findByPk(id);
            if (airport == null) {
                throw new AppError(`Not able to find the resource`, StatusCodes.NOT_FOUND);
            }
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
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

    async get (id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching data in repo layer");
            throw error;
        }
    }
}

module.exports = CrudRepo;