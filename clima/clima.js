const axios = require("axios");

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3852eba0993a7ad4f0d0b13b7b12f2a6&units=metric`)

    return resp.data.main.temp;

};

module.exports = {
    getClima
};