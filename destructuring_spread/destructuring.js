const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

//Extrae la empleada Ana con todos sus datos personales:
let [luis, ana, andrea] = empleados;
console.log(ana);

//Extrae el email del empleado Luis
let { name, email } = luis;
console.log(email);

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

//Cambia el nombre de la propiedad “name” por “nombre”.
let { name: nombre, type, ability, stats, moves } = pokemon;
console.log(nombre);

//Extrae el nombre del pokémon.
console.log(nombre);

//Extrae el tipo de pokémon que es.
console.log(type);

//Extrae el movimiento “Tackle”.
let [, tackle] = moves;
console.log(tackle);
