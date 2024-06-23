const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const airplaneService = new AirplaneService();

async function createAirplane(req, res) {
    try {
        const airplane = await airplaneService.create(req.body);
        SuccessResponse.data = airplane;
        SuccessResponse.message = 'Successfully created the airplane';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirplane(req, res) {
    try {
        const airplane = await airplaneService.destroy(req.params.id);
        SuccessResponse.data = airplane;
        SuccessResponse.message = 'Successfully deleted the airplane';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirplane(req, res) {
    try {
        const airplane = await airplaneService.update(req.params.id, req.body);
        SuccessResponse.data = airplane;
        SuccessResponse.message = 'Successfully updated the airplane';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await airplaneService.get(req.params.id);
        SuccessResponse.data = airplane;
        SuccessResponse.message = 'Successfully fetched the airplane';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await airplaneService.getAll();
        SuccessResponse.data = airplanes;
        SuccessResponse.message = 'Successfully fetched the airplanes';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    deleteAirplane,
    updateAirplane,
    getAirplane,
    getAirplanes
}