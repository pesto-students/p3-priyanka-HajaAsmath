const axios = require('axios');

const GEO_CODE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_DATA_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = '3bea71f7f942028431554879c47b3585';
const EXCLUDE = 'minutely';
const CURRENT_LAT = 13.0878;
const CURRENT_LON = 80.2785;

const getWeatherDataByCity = async (cityName) => {
    const result = await axios.get(`${GEO_CODE_URL}?q=${cityName}&appid=${API_KEY}`);
    return result.data;
}

const getWeatherDataByCities = async (cities) => {
    const result = [];
    for(let city of cities) {
        console.log(city);
        const res = await axios.get(`${GEO_CODE_URL}?q=${city}&appid=${API_KEY}`);
        result.push(res.data);
    }
    return result;
}

const getForcastForXdays = async (days) => {
    if(days <= 8) {
        const res = await axios.get(`${WEATHER_DATA_URL}?lat=${CURRENT_LAT}&lon=${CURRENT_LON}&exclude=${EXCLUDE}&appid=${API_KEY}`);
        const {daily} = res.data;
        console.log(daily);
        return daily.slice(0, days);
    } else {
        return 'Only 8 days forcast available';
    }
}

module.exports = {getWeatherDataByCity, getWeatherDataByCities, getForcastForXdays}