const axios = require('axios');

const getWeather = async(lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const resp = await axios.get(url, {
        params: {
            lat,
            lon: lng,
            appid: '68749e60d38f3146c2e208bdd88735a9',
            units: 'metric'
        }
    });

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}