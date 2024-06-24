const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"flightNumber" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"airplaneId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airlineId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"airlineId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"departureAirportId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"arrivalAirportId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"arrivalTime" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"departureTime" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"price" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['"totalSeats" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateGetRequest(req, res, next) {
    if (!req.query.trip){
        ErrorResponse.message = 'Something went wrong while fetching flights';
        ErrorResponse.error = new AppError(['"trip" attribute not found in the request query'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    else{
        const [departureAirport, arrivalAirport] = req.query.trip.split("-");
        if (departureAirport == arrivalAirport){
            ErrorResponse.message = 'Something went wrong while fetching flights';
            ErrorResponse.error = new AppError(['Departure and arrival airport cannot be same'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateGetRequest
}