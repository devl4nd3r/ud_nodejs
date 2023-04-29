const fs = require("fs")

const axios = require("axios")

class Busquedas {
  constructor() {
    // TODO: implementar BD cuando exista
    this.leerDB()
  }
  historial = []
  dbPath = "./db/database.json"

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    }
  }

  get paramsOWM() {
    return {
      appid: process.env.OWM_KEY,
      units: "metric",
      lang: "es",
    }
  }

  async ciudadFromMapBox(ciudad = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
        params: this.paramsMapBox,
      })
      const getCiudades = await instance.get()
      return getCiudades.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }))
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async weatherFromOWM(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsOWM, lat, lon },
      })

      const getWeather = await instance.get()

      const { weather, main } = getWeather.data

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      }
    } catch (error) {
      console.log(error)
      return []
    }
  }

  agregarHistorial(item = "") {
    // evitar duplicidad
    if (!this.historial.includes(item.toLocaleLowerCase())) {
      historial.unshift(item.toLocaleLowerCase())
      // guardar en BD
      this.guardarDB()
    }
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    }
    fs.writeFileSync(this.dbPath, JSON.stringify(payload))
  }

  leerDB() {
    if (fs.existsSync(this.dbPath)) {
      const dataFromFile = fs.readFileSync(this.dbPath, { encoding: "utf-8" })
      const dataParsed = JSON.parse(dataFromFile)
      this.historial = dataParsed.historial
    }
  }

  get historialCapitaliced() {
    return this.historial.map((v) => {
      let arr = v.split(" ")
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
      }
      return arr.join(" ")
    })
  }
}

module.exports = Busquedas
