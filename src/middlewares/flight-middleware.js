const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    req.body.map((value) => {
        if(!value.flightNumber) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"flightNumber" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.airplaneId) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"airplaneId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.airlineId) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"airlineId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.departureAirportId) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"departureAirportId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.arrivalAirportId) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"arrivalAirportId" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.arrivalTime) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"arrivalTime" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.departureTime) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"departureTime" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.price) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"price" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!value.totalSeats) {
            ErrorResponse.message = 'Something went wrong while creating flight';
            ErrorResponse.error = new AppError(['"totalSeats" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    })
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