const service = require('./service');
const url = require('url');

const handleRequest = async (req, res) => {
    const path = url.parse(req.url).pathname;
    if(path === '/') {
        res.end('Weather Data Api')
    } else if(path === '/getCity') {
        const {cityName} = url.parse(req.url, true).query;
        const result = await service.getWeatherDataByCity(cityName);
        res.end(JSON.stringify(result));
    } else if(path ==='/cities'){
        let {cities} = url.parse(req.url, true).query;
        cities = cities.split(',');
        const result = await service.getWeatherDataByCities(cities);
        res.end(JSON.stringify(result));
    } else if(path === '/getForcast') {
        let {days} = url.parse(req.url, true).query;
        const result = await service.getForcastForXdays(days);
        res.end(JSON.stringify(result));
    } else {
        res.end('Invalid Request');
    }
}

module.exports = {handleRequest};