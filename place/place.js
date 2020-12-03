const axios = require('axios');

const getPlaceLatLng = async(city) => {
    const resp = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
        params: {
            limit: 1,
            namePrefix: city,
            types: "CITY"
        },
        headers: {
            'x-rapidapi-key': '890db24943msh814e019512435dbp1b5576jsncd6c626a0e8d'
        }
    });

    const data = resp.data.data[0];
    const name = data.name;
    const latitude = data.latitude;
    const longitude = data.longitude;

    return {
        name,
        latitude,
        longitude
    }
};

module.exports = {
    getPlaceLatLng
}