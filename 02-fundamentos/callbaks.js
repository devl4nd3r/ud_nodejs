// Funcion que emula el comportamiento del metodo javascript forEach

// array de ejemplo
const heroes = ["Batman", "superman", "antman"];

// funcion recibe 2 argumentos: array y callback
const miforEach = (ar, callback) => {
  for (let i = 0; i < ar.length; i++) {
    // se llama a la funcion recibida como argumento, enviando 2 argumentos
    callback(heroes[i], i);
  }
};

miforEach(heroes, (e, i) => {
  console.log(`${e} con posicion: ${i}`);
});
