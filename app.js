const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Obtener el clima",
        demand: true
    }
}).argv;

// lugar.getLugarLatlng(argv.direccion)
//     .then(console.log);

// clima.getClima(32.50323, -116.97301)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const dir = await lugar.getLugarLatlng(direccion);
        const temp = await clima.getClima(dir.lat, dir.lon);
        return `El clima de ${dir.lugar} es de ${temp}°C`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);