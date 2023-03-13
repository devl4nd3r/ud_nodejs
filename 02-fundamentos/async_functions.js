const asincrona1 = async (work) =>
  new Promise((r, e) => {
    if (work === "") e(Error("Vacio"))
    setTimeout(() => {
      r(work)
    }, 1000)
  })

const asincrona3 = async (work) =>
  new Promise((r, e) => {
    if (work === "") e(Error("Vacio"))
    setTimeout(() => {
      r(work)
    }, 3000)
  })

asincrona1("work1")
  .then(
    (result) => {
      console.log(result)
      return asincrona3("") // vacio lanza error
    },
    (error) => console.log(error)
  )
  .then(
    (result) => console.log(result),
    (error) => console.log(error)
  )
