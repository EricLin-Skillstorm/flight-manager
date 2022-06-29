const Flight = require('../models/Flight.model');

const createFlight = async ({flightNum, depPort, depTime, depDate, arrPort, arrTime, arrDate, maxPass, curPass}) => {
    try {
        const flight = new Flight({
            flightNum,

            depPort, 
            depTime, 
            depDate,
              
            arrPort, 
            arrTime, 
            arrDate,

            maxPass,  
            curPass 
        }); 
        await flight.save(); 
        return flight;
    } 
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const updateFlight = async (updatedFlight) =>{
    try {
        const updates = {
            flightNum,

            depPort,
            depTime,
            depDate,

            arrPort,
            arrDate,
            arrTime,

            maxrPass,
            currPass
        };
        const updatedFlight = await Flight.findOneAndUpdate({ flightNum } , updates, { new: true });
        return updatedFlight;
    } catch (err) {
        throw { status: 400, message: err.message };
    }
}

const findFlight = async id => {
    try {
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No flights found.`;
        }
        return flight; 
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; 
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); 
    return flights;
}

const deleteFlight = async id => {
    const flights = await Flight.deleteOne({_id:id});
    return flights;
}

module.exports = { createFlight, findFlight, findAllFlights, updateFlight, deleteFlight };