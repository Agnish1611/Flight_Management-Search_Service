const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

async function validateCreateRequest(req, res, next) {
    await req.body.map((value) => {
        if(!value.modelNo) {
            ErrorResponse.message = 'Something went wrong while creating airplane';
            ErrorResponse.error = new AppError(['"modelNo" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    });
    next();
}

module.exports = {
    validateCreateRequest
}