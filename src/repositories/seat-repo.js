const CrudRepo = require('./crud-repo');
const { Seat } = require('../models/index');

class SeatRepo extends CrudRepo {
    constructor () {
        super(Seat);
    }

    async getAll (filter) {
        try {
            if (filter.type) {
                return await Seat.findAll({
                    where: filter,
                });
            }
            const response = await Seat.findAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SeatRepo;