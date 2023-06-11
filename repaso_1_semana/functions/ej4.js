/*Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes 
utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.*/
let numGrande;

const numeroMasGrande = (numeros) => {
  numGrande = numeros[0];
  for (const num of numeros) {
    if (num > numGrande) {
      numGrande = num;
    }
  }
  console.log(numGrande);
};

numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
numeroMasGrande([10, -5, 20, -15]); // Devuelve 20
