/* Utiliza la siguiente array para resolver los próximos ejercicios:*/
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
//Crea un array con la gente mayor de 25 años y muéstralo por consola.forEach
const personas25 = [];
gente.forEach((persona) => {
  if (persona.edad >= 25) {
    persona25.push(persona);
  }
});
console.log(persona25);

//Crea un array con la gente que empieza por J.
const personasJ = [];
gente.forEach((persona) => {
  if (persona.nombre.charAt(0) === "J") {
    personasJ.push(persona);
  }
});
console.log(personasJ);
