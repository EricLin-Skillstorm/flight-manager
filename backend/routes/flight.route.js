const router = require('express').Router();
const { createFlight, findFlight, findAllFlights, updateFlight, deleteFlight } = require('../controllers/Flight.controller');

router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.status(200).json(flights);
});

router.get('/:id', async (req, res) => {
    try{
        const flight = await findFlight(req.params.id);
        res.json(flight);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.post('/', async (req, res) => {
    try {
        const _id = await createFlight(req.body);
        res.status(201).json({ _id });
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

router.put('/', async (req, res) => {
    try{
        const updatedFlight = await updateFlight(req.body);
        res.status(201).json(updatedFlight);
    }catch (err){
        res.status(err?.status || 500).json(err);
    }
});

router.delete('/:flightNo', async (req, res) => {
    try {
        const deletedFlight = await deleteFlight(req.params.flightNum);
        res.status(201).json({ deletedFlight });
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

module.exports = router;