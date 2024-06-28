const { SeatService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const seatService = new SeatService();

async function createSeat(req, res) {
    try {
        const seats = await seatService.create(req.body);
        SuccessResponse.data = seats;
        SuccessResponse.message = 'Successfully created the seat';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteSeat(req, res) {
    try {
        const seat = await seatService.destroy(req.params.id);
        SuccessResponse.data = seat;
        SuccessResponse.message = 'Successfully deleted the seat'; 
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateSeat(req, res) {
    try {
        const seat = await seatService.update(req.params.id, req.body);
        SuccessResponse.data = seat;
        SuccessResponse.message = 'Successfully updated the seat';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getSeats(req, res) {
    try {
        const seats = await seatService.getAll(req.query, req.params.id);
        SuccessResponse.data = seats;
        SuccessResponse.message = 'Successfully fetched the seats';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createSeat,
    deleteSeat,
    updateSeat,
    getSeats
}