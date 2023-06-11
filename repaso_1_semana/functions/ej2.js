/* Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. 
Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.*/
let sum = 0;
const numeros = [1, 2, 3, 4, 5];
const numerosNega = [-5, 10, -15, 20];

const sumarElementos = (numeros) => {
  for (const numero of numeros) {
    sum += numero;
  }
  console.log(sum);
};

sumarElementos(numeros); // Devuelve 15
sumarElementos(numerosNega); // Devuelve 10
