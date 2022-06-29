const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//sample flight object
const testFlight = {
    flightNum: 777,
    depPort: "SeaTac",
    depTime: 0700,
    depDate: 11/01/2022,
    arrPort: "JFK",
    arrTime: 1230,
    arrDate: 11/01/2022,
    maxPass: 25,
    currPass: 17
};

const flightSchema = new Schema({
    flightNum:{
        type: Number,
        unique: true,
        required: true,
    },
    depPort:{
        type: String,
        required: true,
    },
    depTime:{
        type: String,
        required: true,
    },
    depDate:{
        type: Date,
        required: true,
    },
    arrPort:{
        type: String,
        required: true,
    },
    arrTime:{
        type: String,
        required: true,
    },
    arrDate:{
        type: Date,
        required: true,
    },
    maxPass:{
        type: Number,
        min: [1, 'Flight must allow at least 1 passenger'],
        required: true,
    },
    currPass:{
        type: Number,
        min: [0, 'Cannot have fewer than 0 passengers'],
        required: true,
    },
})