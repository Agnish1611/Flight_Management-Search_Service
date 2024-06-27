const CrudRepo = require('./crud-repo');
const { Flight, Airport, Airline, Airplane } = require('../models/index');

class FlightRepo extends CrudRepo {
    constructor () {
        super(Flight);
    }

    async create (data) {
        try {
            const response = await Flight.create(data);
            return response;
        } catch (error) {
            if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
                const message = [];
                error.errors.forEach(element => {
                    message.push(element.message);
                });
                throw new AppError(message, StatusCodes.BAD_REQUEST);
            }
            throw error;
        }
    }

    async getAll (trip, filter, sort) {
        try {
            const departureAirport = await Airport.findOne({
                where: {
                    code: trip.departureAirport
                }
            });
            const arrivalAirport = await Airport.findOne({
                where: {
                    code: trip.arrivalAirport
                }
            });
            if (trip.airline){
                const airline = await Airline.findOne({
                    where: {
                        name: trip.airline
                    }
                });
                filter.airlineId = airline.id;
            }
            filter.departureAirportId = departureAirport.id;
            filter.arrivalAirportId = arrivalAirport.id;

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
                    },
                    {
                        model: Airline,
                        required: true,
                        as: 'airlineDetail',
                    }
                ]
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FlightRepo;