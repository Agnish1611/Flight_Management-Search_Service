const CrudRepo = require('./crud-repo');
const { Airport } = require('../models/index');

class AirportRepo extends CrudRepo {
    constructor () {
        super(Airport);
    }

    async getAll (filter) {
        try {
            let response = await Airport.findAll({
                where: filter,
                limit: 5
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching multiple data in repo layer");
            throw error;
        }
    }
}

module.exports = AirportRepo;