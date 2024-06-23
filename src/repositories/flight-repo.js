const CrudRepo = require('./crud-repo');
const { Flight } = require('../models/index');

class FlightRepo extends CrudRepo {
    constructor () {
        super(Flight);
    }

    async getAll (filter, sort) {
        try {
            const response = await Flight.findAll({
                where: filter,
                order: sort,
                include: [
                    {
                        model: Airplane,
                        required: true,
                        as: 'airplaneDetail',
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'departureAirport',
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'arrivalAirport',
                    }
                ]
            })
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FlightRepo;