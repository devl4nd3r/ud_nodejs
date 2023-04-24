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

const getEmpleado = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => id === e.id)?.nombre
    empleado ? resolve(empleado) : reject(`Empleado no existe con ese id`)
  })
  return promesa
}

const getSueldo = (id) => {
  const promesa = new Promise((res, rej) => {
    const sueldo = sueldos.find((s) => id === s.id)?.valor
    sueldo ? res(sueldo) : rej(`Sueldo no existe con ese id`)
  })
  return promesa
}

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id)
    const sueldo = await getSueldo(id)
    return `El empleado ${empleado} tiene un sueldo de ${sueldo}`
  } catch (error) {
    throw error
  }
}

let id = 3,
  nombre
getInfoUsuario(id)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
