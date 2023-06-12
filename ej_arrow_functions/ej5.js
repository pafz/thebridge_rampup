/* Dado el siguiente array, obtén la multiplicación de todos los elementos del array: REDUCE atención function callback!!!
// Salida--> 483600 */
const numeros = [39, 2, 4, 25, 62];
let i = 1;

const multiplication = numeros.reduce(function callback(i, num) {
  return (i *= num);
});
console.log(multiplication);
