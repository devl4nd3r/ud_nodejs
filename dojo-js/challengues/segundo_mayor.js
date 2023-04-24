const arr = [1, 5, 7, 3, 8, 9, 2]

//Obtener el segundo valor maximo del array

let currentMaxVal = 0
let secondMaxVal = 0
const r = arr.map((v) => {
  if (v > currentMaxVal) {
    secondMaxVal = currentMaxVal
    currentMaxVal = v
  } else {
    if (v > secondMaxVal) {
      secondMaxVal = v
    }
  }
})

console.log(currentMaxVal)
console.log(secondMaxVal)
