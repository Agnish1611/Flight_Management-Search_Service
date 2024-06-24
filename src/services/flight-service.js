const { FlightRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const { Op } = require('sequelize');

const flightRepo = new FlightRepo();

class FlightService extends CrudService {
    constructor (){
        super(flightRepo);
    }

    async getAll (data) {
        let filter = {};
        let trip = {};            
        
        if (data.trip){
            const [departureAirport, arrivalAirport] = data.trip.split("-");
            trip.departureAirport = departureAirport;
            trip.arrivalAirport = arrivalAirport;
        }

        if(data.airline) {
            trip.airline = data.airline;
        }

        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
            
        if (data.date && !data.arrivalTime && !data.departureTime){
            filter.departureTime = {
                [Op.between]: [new Date(data.date+"T00:01:00+05:30"), new Date(data.date+"T23:59:00+05:30")]
            };
        }

        if (data.arrivalTime){
            switch(data.arrivalTime){
                case "MOR":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(data.date+"T00:01:00+05:30"), new Date(data.date+"T05:59:00+05:30")]
                    };
                    break;
                case "NOO":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(data.date+"T06:00:00+05:30"), new Date(data.date+"T12:00:00+05:30")]
                    };
                    break;
                case "EVE":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(data.date+"T12:00:00+05:30"), new Date(data.date+"T18:00:00+05:30")]
                    };
                    break;
                case "NIG":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(data.date+"T18:01:00+05:30"), new Date(data.date+"T23:59:00+05:30")]
                    };
                    break;
                default:
                    throw new AppError('Time error', StatusCodes.INTERNAL_SERVER_ERROR);
            }
        }

        if (data.departureTime){
            switch(data.departureTime){
                case "MOR":
                    filter.departureTime = {
                        [Op.between]: [new Date(data.date+"T00:01:00+05:30"), new Date(data.date+"T05:59:00+05:30")]
                    };
                    break;
                case "NOO":
                    filter.departureTime = {
                        [Op.between]: [new Date(data.date+"T06:00:00+05:30"), new Date(data.date+"T12:00:00+05:30")]
                    };
                    break;
                case "EVE":
                    filter.departureTime = {
                        [Op.between]: [new Date(data.date+"T12:00:00+05:30"), new Date(data.date+"T18:00:00+05:30")]
                    };
                    break;
                case "NIG":
                    filter.departureTime = {
                        [Op.between]: [new Date(data.date+"T18:01:00+05:30"), new Date(data.date+"T23:59:00+05:30")]
                    };
                    break;
            }
        }
        console.log(data);
        try {
            const response = await flightRepo.getAll(trip, filter);
            return response; 
        } catch (error) {
            throw new AppError('Cannot fetch the airports', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = FlightService;