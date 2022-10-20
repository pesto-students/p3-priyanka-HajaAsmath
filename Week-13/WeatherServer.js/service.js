const axios = require('axios');
const path = require('path');
require("dotenv").config();
const EXCLUDE = 'minutely';
const CURRENT_LAT = 13.0878;
const CURRENT_LON = 80.2785;

const getWeatherDataByCity = async (cityName) => {
    const result = await axios.get(`${process.env.GEO_CODE_URL}?q=${cityName}&appid=${process.env.API_KEY}`);
    return result.data;
}

const getWeatherDataByCities = async (cities) => {
    let result = [];
    let promiseArray = [];
    for(let city of cities) {
        const promise = new Promise((resolve, reject) => {
            resolve(axios.get(`${process.env.GEO_CODE_URL}?q=${city}&appid=${process.env.API_KEY}`));
        }).then(res => {
            if(res.status !== 200){
                throw new Error("Request Failed");
            }
            return res.data;
        });
        promiseArray.push(promise);
    }
    result = await Promise.all(promiseArray).then(res => {
        return res;
    }).catch(err => {
        return err.message;
    });
    return result;
}

const getForcastForXdays = async (days) => {
    if(days <= 8) {
        const res = await axios.get(`${process.env.WEATHER_DATA_URL}?lat=${CURRENT_LAT}&lon=${CURRENT_LON}&exclude=${EXCLUDE}&appid=${process.env.API_KEY}`);
        const {daily} = res.data;
        return daily.slice(0, days);
    } else {
        return 'Only 8 days forcast available';
    }
}

module.exports = {getWeatherDataByCity, getWeatherDataByCities, getForcastForXdays}