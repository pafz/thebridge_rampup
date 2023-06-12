/* Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola. MAP, difícil estructura, es como una función siendo parámetro. Necesario return*/
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
/* Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.*/

const personas25 = gente.map((persona) => {
  if (persona.edad > 25) {
    return persona;
  }
});
console.log(personas25);

/* Crea un array con la gente que empieza por J. */

const personasJ = gente.map((persona) => {
  if (persona.nombre.charAt(0) === "J") {
    return persona;
  }
});

console.log(personasJ);

/* Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
*/
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevateNumbers = numbers.map((number) => {
  return Math.pow(number, number);
});
console.log(elevateNumbers);
