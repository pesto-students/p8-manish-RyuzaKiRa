const express = require('express');
const axios = require('axios');
const apiType = require('../Models/WeatherModels');
const router = express.Router();
const BASE_URL = "http://api.weatherapi.com/v1";

// Fetches weather data for multiple cities
const fetchMultipleCities = async (places) => {
    const requests = places.map(async (place) => axios.get(`${BASE_URL}/${apiType.current}?key=${process.env.SECRET_KEY}&q=${place}`));
    const allResponses = await axios.all(requests).then((responses) => {
        const newResponses = responses.map((response) => {
            return response.data;
        });
        return newResponses;
    })
    // Returns an error message if any one of the places in list are invalid as per the external API.
        .catch((error) => {
            // Appending name of the place in the message which caused the error.
            const baseMessage = error.request.path.split('q=')[1];
            error.response.data.error.message = `location: ${baseMessage}, ${error.response.data.error.message}`;
            return error.response.data;
        });
    return allResponses;
}

// Endpoint for providing weather data for current time.
router.get('/current', async (req, res) => {
    // If no specific place is provided it will check if any list of places are provided or not.
    if (!req.query.place) {
        // If no list of places is provided and no specific place is provided, a default list will be provided.
        if (!req.body.places) {
            // ["Ghaziabad", "Delhi", "Noida", "Jamshedpur"] is the default list of places.
            req.body.places = ["Ghaziabad", "Delhi", "Noida", "Jamshedpur"];
        }
        const responses = await fetchMultipleCities(req.body.places);
        // Check if paginated data is requested or not.
        if (req.query.pn && req.query.ps) {
            // Returns an error message of the paginated details provided are invalid.
            if ((Number(req.query.pn) === NaN) || (Number(req.query.ps) === NaN)) {
                return res.status(400).send({
                    code: 400,
                    message: "Invalid page number or page size provided!"
                });
            }
            // Returns paginated data.
            return res.send(responses.slice((req.query.pn - 1) * req.query.ps, req.query.pn * req.query.ps));
        }
        // If paginated data is not requested, returns the whole list of weather data.
        return res.send(responses);
        
        // If any specific place is provied, it will fetch weather data for that place only.
    } else {
        const response = await axios({
            method: 'get',
            url: `${BASE_URL}/current.json?key=${process.env.SECRET_KEY}&q=${req.query.place}`
        })
            .then((response) => {
                return response;
            })
            // Catching and returning error message if the specified place is invalid.
            .catch((error) => {
                return error.response;
            });

        // Returning the weather data for the specified place.
        return res.send(response.data);
    }
});

// Endpoint for providing weather data for forecasted time
router.get('/forecast', async (req, res) => {
    // If any place is not specified, a default place is given
    if (!req.query.place) {
        req.query.place = 'Ghaziabad';
    }

    // If no value for days is specified, it will be given a '1' by default.
    const days = `days=${req.query.days ? req.query.days : '1'}`;

    // hour parameter is optional and will only be included in the URL if provided.
    const hour = `hour=${req.query?.hour}`
    
    const response = await axios({
        method: 'get',
        url: `${BASE_URL}/${apiType.forecast}?key=${process.env.SECRET_KEY}&q=${req.query.place}&${days}&${req.query.hour ? hour : ''}`
    })
        .then((response) => {
            return response;
        })
        // Catching and returning error message if the specified params are invalid.
        .catch((error) => {
            return error.response;
        });
    return res.send(response.data);
});

// Endpoint for returning weather data based on the date provided, it can either be in past or future.
router.get('/weather', async (req, res) => {
    // If any place is not specified, a default place is given
    if (!req.query.place) {
        req.query.place = 'Ghaziabad';
    }
    // hour parameter is optional and will only be included in the URL if provided.
    const hour = `hour=${req.query?.hour}`

    // By default if not date param 'dt' is provided, date will be set to 14 days ahead in future.
    const dateTime = new Date();
    dateTime.setDate(dateTime.getDate() + 14);
    let day = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
    let month = dateTime.getMonth() < 10 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();

    // By default if not date param 'dt' is provided, date will be set to 14 days ahead in future.
    req.query.dt = req.query.dt ? req.query.dt : `${year}/${month}/${day}`;
    const date = `dt=${req.query.dt}`;
    const response = await axios({
        method: 'get',
        // Based on the date whether it is set in future or past, URL will be changed internally
        url: `${BASE_URL}/${new Date() > new Date(req.query.dt) ? apiType.history : apiType.future}?key=${process.env.SECRET_KEY}&q=${req.query.place}&${date}&${req.query.hour ? hour : ''}`
    })
        .then((response) => {
            return response;
        })
        // Catching and returning error message if the specified params are invalid.
        .catch((error) => {
            return error.response;
        });
    return res.send(response.data);
});

module.exports = router;