const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const flightService = new FlightService();

async function createFlight(req, res) {
    try {
        const flight = await flightService.create(req.body);
        SuccessResponse.data = flight;
        SuccessResponse.message = 'Successfully created the flight';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteFlight(req, res) {
    try {
        const flight = await flightService.destroy(req.params.id);
        SuccessResponse.data = flight;
        SuccessResponse.message = 'Successfully deleted the flight';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateFlight(req, res) {
    try {
        const flight = await flightService.update(req.params.id, req.body);
        SuccessResponse.data = flight;
        SuccessResponse.message = 'Successfully updated the flight';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const flight = await flightService.get(req.params.id);
        SuccessResponse.data = flight;
        SuccessResponse.message = 'Successfully fetched the flight';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlights(req, res) {
    try {
        const flights = await flightService.getAll(req.query);
        SuccessResponse.data = flights;
        SuccessResponse.message = 'Successfully fetched the flights';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    deleteFlight,
    updateFlight,
    getFlight,
    getFlights
}