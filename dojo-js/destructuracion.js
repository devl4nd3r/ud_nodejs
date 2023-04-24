const heroe = {
  nombre: "Bruce Wayne",
  poder: "Pelear",
  getWho() {
    return `${this.nombre} su poder es:${this.poder}`;
  },
};

const { nombre, edad } = heroe;
const heroes = ["superman", "deadpool", "antman"];

const [, , h3] = heroes;
console.log(heroe.getWho());
console.log(nombre, edad, h3);
