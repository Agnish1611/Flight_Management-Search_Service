const { FlightRepo } = require('../repositories/index');
const CrudService = require('./crud-service');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const { Op } = require('sequelize');

const { Airplane } = require('../models/index');

const flightRepo = new FlightRepo();

class FlightService extends CrudService {
    constructor (){
        super(flightRepo);
    }

    async create (data) {
        try {
            const airplane = await Airplane.findByPk(data.airplaneId);
            const seats = await airplane.getSeats();
            const totalSeats = seats.length;
            const response = await flightRepo.create({ ...data, totalSeats});
            return response;
        } catch (error) {
            console.log(error);
            if (error.statusCode == StatusCodes.BAD_REQUEST){
                throw error;
            }
            throw new AppError('Cannot create the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async getAll (query) {
        let filter = {};
        let trip = {};
        let sort = [];   
        
        if (query.trip){
            const [departureAirport, arrivalAirport] = query.trip.split("-");
            trip.departureAirport = departureAirport;
            trip.arrivalAirport = arrivalAirport;
        }

        if(query.airline) {
            trip.airline = query.airline;
        }

        let priceFilter = [];
        if(query.minPrice) {
            priceFilter.push({price: {[Op.gte]: query.minPrice}});
        }
        if(query.maxPrice) {
            priceFilter.push({price: {[Op.lte]: query.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
            
        if (query.date && !query.arrivalTime && !query.departureTime){
            filter.departureTime = {
                [Op.between]: [new Date(query.date+"T00:01:00+05:30"), new Date(query.date+"T23:59:00+05:30")]
            };
        }

        if (query.arrivalTime){
            switch(query.arrivalTime){
                case "MOR":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(query.date+"T00:01:00+05:30"), new Date(query.date+"T05:59:00+05:30")]
                    };
                    break;
                case "NOO":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(query.date+"T06:00:00+05:30"), new Date(query.date+"T12:00:00+05:30")]
                    };
                    break;
                case "EVE":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(query.date+"T12:00:00+05:30"), new Date(query.date+"T18:00:00+05:30")]
                    };
                    break;
                case "NIG":
                    filter.arrivalTime = {
                        [Op.between]: [new Date(query.date+"T18:01:00+05:30"), new Date(query.date+"T23:59:00+05:30")]
                    };
                    break;
                default:
                    throw new AppError('Time error', StatusCodes.INTERNAL_SERVER_ERROR);
            }
        }

        if (query.departureTime){
            switch(query.departureTime){
                case "MOR":
                    filter.departureTime = {
                        [Op.between]: [new Date(query.date+"T00:01:00+05:30"), new Date(query.date+"T05:59:00+05:30")]
                    };
                    break;
                case "NOO":
                    filter.departureTime = {
                        [Op.between]: [new Date(query.date+"T06:00:00+05:30"), new Date(query.date+"T12:00:00+05:30")]
                    };
                    break;
                case "EVE":
                    filter.departureTime = {
                        [Op.between]: [new Date(query.date+"T12:00:00+05:30"), new Date(query.date+"T18:00:00+05:30")]
                    };
                    break;
                case "NIG":
                    filter.departureTime = {
                        [Op.between]: [new Date(query.date+"T18:01:00+05:30"), new Date(query.date+"T23:59:00+05:30")]
                    };
                    break;
            }
        }

        if (query.passengers){
            filter.totalSeats = {
                [Op.gte]: query.passengers
            }
        }

        if(query.sort) {
            const params = query.sort.split(',');
            const sortFilters = params.map((param) => param.split('_'));
            sort = sortFilters;
        }

        try {
            const response = await flightRepo.getAll(trip, filter, sort);
            return response; 
        } catch (error) {
            throw new AppError('Cannot fetch the airports', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = FlightService;