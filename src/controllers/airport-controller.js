const { AirportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const airportService = new AirportService();

async function createAirport(req, res) {
    try {
        const airports = await airportService.create(req.body);
        SuccessResponse.data = airports;
        SuccessResponse.message = 'Successfully created the airport';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirport(req, res) {
    try {
        const airport = await airportService.destroy(req.params.id);
        SuccessResponse.data = airport;
        SuccessResponse.message = 'Successfully deleted the airport';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const airport = await airportService.update(req.params.id, req.body);
        SuccessResponse.data = airport;
        SuccessResponse.message = 'Successfully updated the airport';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirport(req, res) {
    try {
        const airport = await airportService.get(req.params.id);
        SuccessResponse.data = airport;
        SuccessResponse.message = 'Successfully fetched the airport';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await airportService.getAll(req.query);
        SuccessResponse.data = airports;
        SuccessResponse.message = 'Successfully fetched the airports';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    updateAirport,
    getAirport,
    getAirports
}