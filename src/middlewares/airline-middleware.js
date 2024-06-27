const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

async function validateCreateRequest(req, res, next) {
    await req.body.map((value) => {
        if(!value.name) {
            ErrorResponse.message = 'Something went wrong while creating airline';
            ErrorResponse.error = new AppError(['"name" attribute not found in the request body'], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    });
    next();
}

module.exports = {
    validateCreateRequest
}