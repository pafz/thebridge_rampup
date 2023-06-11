/*
Utiliza la siguiente array para resolver los próximos ejercicios:
*/
let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

//1. Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
const felinosMayor4 = [];
for (const animal of animales) {
  if (animal.edad > 4) {
    if (animal.especie === "Felino") {
      console.log(animal.nombre);
    }
  }
}

//2. Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.
const herbivoros = [];

for (const animal of animales) {
  if (animal.especie === "Herbívoro" && animal.edad % 2 === 0) {
    herbivoros.push(animal.nombre);
  }
}
console.log(herbivoros);

//3. Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.
const onmivoros = [];

for (const animal of animales) {
  if (
    animal.especie === "Omnívoro" ||
    (animal.especie === "Ave" && animal.edad > 3)
  ) {
    onmivoros.push(animal.nombre);
  }
}
console.log(onmivoros);

//4. Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.
const empiezaH = [];
for (const animal of animales) {
  if (animal.especie.charAt(0) === "H") {
    empiezaH.push(animal.nombre);
  }
}
console.log(empiezaH);

//5. Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.
const letras4EspacieFoH = [];
for (const animal of animales) {
  if (
    (animal.nombre.length > 4 && animal.especie === "Felino") ||
    animal.especie === "Herbívoro"
  ) {
    letras4EspacieFoH.push(animal);
  }
}
console.log(letras4EspacieFoH);
