const CrudRepo = require('./crud-repo');
const { Airline } = require('../models/index');

class AirlineRepo extends CrudRepo {
    constructor () {
        super(Airline);
    }

    async getAll() {
        try {
            const response = await Airline.findAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AirlineRepo;