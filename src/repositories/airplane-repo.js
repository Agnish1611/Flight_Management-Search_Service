const CrudRepo = require('./crud-repo');
const { Airplane } = require('../models/index');

class AirplaneRepo extends CrudRepo {
    constructor () {
        super(Airplane);
    }

    async getAll() {
        try {
            const response = await Airplane.findAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AirplaneRepo;