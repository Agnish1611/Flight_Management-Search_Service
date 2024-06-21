const { AirportRepo } = require('../repositories/index');
const { Op } = require('sequelize');

class AirportService {
    constructor (){
        this.airportRepo = new AirportRepo();
    }

    async create (data) {
        try {
            const airport = await this.airportRepo.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong while creating airport in service layer");
            throw error;
        }
    }

    async destroy (id) {
        try {
            const airport = await this.airportRepo.destroy(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong while deleting airport in service layer");
            throw error;
        }
    }

    async update (id, data) {
        try {
            const airport = await this.airportRepo.update(id, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong while updating airport in service layer");
            throw error;
        }
    }

    async get (id) {
        try {
            const airport = await this.airportRepo.get(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong while fetching airport in service layer");
            throw error;
        }
    }

    async getAll (data) {
        try {
            const filter = {
                address: {
                    [Op.substring]: data.search
                }
            }
            const airport = await this.airportRepo.getAll(filter);
            return airport;
        } catch (error) {
            console.log("Something went wrong while fetching airport in service layer");
            throw error;
        }
    }
}

module.exports = AirportService;