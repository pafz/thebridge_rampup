//Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const gente = [
  {
    nombre: "Pep",
    edad: 22,
  },
  {
    nombre: "julio",
    edad: 2,
  },
  {
    nombre: "mar",
    edad: 5,
  },
  {
    nombre: "vero",
    edad: 22,
  },
];

for (persona of gente) {
  if (persona.edad >= 18) {
    console.log(persona.nombre);
  }
}
