const { AirportService } = require('../services');

const airportService = new AirportService();

async function createAirport(req, res) {
    try {
        const airports = await airportService.create(req.body);
        return res.status(201).json({
            data: airports,
            success: true,
            arr: {},
            description: 'Successfully created the airports'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            arr: error,
            description: 'Failed to create the airports'
        });
    }
}

async function deleteAirport(req, res) {
    try {
        const airport = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            arr: {},
            description: 'Successfully deleted the airport'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            arr: error,
            description: 'Failed to delete the airport'
        });
    }
}

async function updateAirport(req, res) {
    try {
        const airport = await airportService.update(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address
        });
        return res.status(200).json({
            data: airport,
            success: true,
            arr: {},
            description: 'Successfully updated the airport'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            arr: error,
            description: 'Failed to update the airport'
        });
    }
}

async function getAirport(req, res) {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            arr: {},
            description: 'Successfully fetched the airport'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            arr: error,
            description: 'Failed to fetch the airport'
        });
    }
}

async function getAirports(req, res) {
    try {
        const airports = await airportService.getAll(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            arr: {},
            description: 'Successfully fetched the airports'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            arr: error,
            description: 'Failed to fetch the airports'
        });
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    updateAirport,
    getAirport,
    getAirports
}