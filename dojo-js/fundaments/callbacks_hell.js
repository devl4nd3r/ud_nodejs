// EVITAR CALLBACKS SOBRE CALLBACKS, SE RECOMIENDA USAR PROMESAS

const empleados = [
  {
    id: 1,
    nombre: "Jairo Rey",
  },
  {
    id: 2,
    nombre: "Carlos Perez",
  },
  { id: 3, nombre: "Elgo Tito" },
]

const sueldos = [
  {
    id: 1,
    valor: 1200,
  },
  {
    id: 2,
    valor: 1800,
  },
]

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => id === e.id)?.nombre
  if (empleado) {
    callback(null, empleado)
  } else {
    callback(`empleado con el id: ${id} no existe`)
  }
}
const getSalario = (id, callback) => {
  const sueldo = sueldos.find((e) => id === e.id)?.valor
  if (sueldo) {
    callback(null, sueldo)
  } else {
    callback(`sueldo con el id: ${id} no existe`)
  }
}

getEmpleado(1, (err, empleado) => {
  if (err) {
    return console.log(err)
  }

  getSalario(1, (err, sueldo) => {
    if (err) {
      return console.log(err)
    }
    console.log(`el empleado ${empleado} tiene un sueldo de ${sueldo}`)
  })
})
