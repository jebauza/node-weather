const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'City to get the weather',
        demand: true,
    },
}).argv;

const getInfo = async city => {
    try {
        const coords = await place.getPlaceLatLng(city);
        const temp = await weather.getWeather(coords.latitude, coords.longitude);
        return `The weather in ${city.toUpperCase()} is ${temp} .`;
    } catch (error) {
        return `${city.toUpperCase()} weather cannot be determined`;
    }
};

getInfo(argv.city).then(console.log).catch(console.log);