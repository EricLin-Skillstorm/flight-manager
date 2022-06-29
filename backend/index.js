const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const cors = require('cors');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json()); 
app.use(cors());

const flightRouter = require ('./routes/flight.route.js');

app.use('/flight', flightRouter);

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Successfully connected to MongoDB`);
    }) 
    .catch(err => {
        console.error(err) + ': Database not connected';
        process.exit(1);
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});