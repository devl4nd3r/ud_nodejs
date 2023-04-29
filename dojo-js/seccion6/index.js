const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require("./helpers/inquirer")

const Busquedas = require("./models/busquedas")
require("dotenv").config()

const main = async () => {
  let opt

  const busquedas = new Busquedas()

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        const entry = await leerInput("Ciudad:")
        const lugares = await busquedas.ciudadFromMapBox(entry)
        const selected = await listarLugares(lugares)
        if (selected === "0") continue
        const objSelected = lugares.find((l) => l.id === selected)

        //agergar lugar seleccionado al historial
        busquedas.agregarHistorial(objSelected.nombre)

        // obtener clima
        const objWeather = await busquedas.weatherFromOWM(
          objSelected.lat,
          objSelected.lng
        )

        console.log("Información de la ciudad")
        console.log("Ciudad:", objSelected.nombre.green)
        console.log("Lat:", objSelected.lat)
        console.log("Lng:", objSelected.lng)
        console.log("Temperatura:", objWeather.temp)
        console.log("Mínima:", objWeather.min)
        console.log("Máxima:", objWeather.max)
        console.log("Clima:", objWeather.desc.green)

        break

      case 2:
        // obtener el array del historial
        console.log("Historial de Busquedas")
        busquedas.historialCapitaliced.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green
          console.log(idx, lugar)
        })
        // mostrar el array
        break

      default:
        break
    }

    if (opt !== 0) await pausa()
  } while (opt !== 0)
}

main()
