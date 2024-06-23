const { AirlineService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const airlineService = new AirlineService();

async function createAirline(req, res) {
    try {
        const airline = await airlineService.create(req.body);
        SuccessResponse.data = airline;
        SuccessResponse.message = 'Successfully created the airline';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirline(req, res) {
    try {
        const airline = await airlineService.destroy(req.params.id);
        SuccessResponse.data = airline;
        SuccessResponse.message = 'Successfully deleted the airline';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirline(req, res) {
    try {
        const airline = await airlineService.update(req.params.id, req.body);
        SuccessResponse.data = airline;
        SuccessResponse.message = 'Successfully updated the airline';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirline(req, res) {
    try {
        const airline = await airlineService.get(req.params.id);
        SuccessResponse.data = airline;
        SuccessResponse.message = 'Successfully fetched the airline';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirlines(req, res) {
    try {
        const airlines = await airlineService.getAll(req.query);
        SuccessResponse.data = airlines;
        SuccessResponse.message = 'Successfully fetched the airlines';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirline,
    deleteAirline,
    updateAirline,
    getAirline,
    getAirlines
}