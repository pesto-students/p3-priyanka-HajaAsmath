const service = require('./service');
const url = require('url');

const handleRequest = (req, res) => {
    const path = url.parse(req.url).pathname;
    if(controller[path]) {
        controller[path](req, res);
    } else {
        res.end("Invalid Request");
    }
}

const controller = {
    "/getCity" : async (req, res) => {
        const {
            cityName
        } = url.parse(req.url, true).query;
        const result = await service.getWeatherDataByCity(cityName);
        res.end(JSON.stringify(result));
    }, 
    "/cities" : async (req, res) => {
        let {
            cities
        } = url.parse(req.url, true).query;
        cities = cities.split(',');
        const result = await service.getWeatherDataByCities(cities);
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    },
    "/getForcast" : async (req, res) => {
        let {
            days
        } = url.parse(req.url, true).query;
        const result = await service.getForcastForXdays(days);
        res.end(JSON.stringify(result));
    }
}

module.exports = {
    handleRequest
};