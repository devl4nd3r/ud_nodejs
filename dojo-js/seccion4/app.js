const { genTabla } = require("./helpers/multiplicar")
const base = 7
console.clear()
genTabla(base)
  .then((tabla) => console.log(`tabla generada`, tabla))
  .catch((e) => console.log(e))
