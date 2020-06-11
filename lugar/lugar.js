const axios = require("axios");

const getLugarLatlng = async(direccion) => {

    const url = direccion;

    console.log(encodeURI(url));

    const instance = axios.create({
        url: "https://geocode.xyz/32.50327,-116.97249?json=1" //agregar url del lugar
    });

    const resp = await instance.get();

    const data = resp.data;
    const lugar = data.city;
    const lat = data.latt;
    const lon = data.longt;

    return {
        lugar,
        lat,
        lon
    };

};

module.exports = {
    getLugarLatlng
}