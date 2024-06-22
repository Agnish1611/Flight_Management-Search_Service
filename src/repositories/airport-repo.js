const CrudRepo = require('./crud-repo');
const { Airport } = require('../models/index');

class AirportRepo extends CrudRepo {
    constructor () {
        super(Airport);
    }

    async getAll (filter) {
        try {
            if (filter.address) {
                return await Airport.findAll({
                    where: filter,
                    limit: 5
                });
            }
            const response = await Airport.findAll({
                limit: 5
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AirportRepo;