const fs = require("fs")

const genTabla = async (num) => {
  try {
    console.log("=====================")
    console.log(`Tabla del ${num}`)
    console.log("=====================")

    let salida = ""

    for (let i = 1; i <= 12; i++) {
      salida += `${num} x ${i} = ${i * num} \n`
    }
    console.log(salida)

    fs.writeFileSync(`tabla${num}.txt`, salida)
    return `tabla${num}.txt`
  } catch (error) {
    throw error
  }
}

module.exports = { genTabla }
