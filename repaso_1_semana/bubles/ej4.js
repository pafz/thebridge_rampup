//Dado un número, encontrar su factorial. el producto de todos los números enteros positivos desde el hasta
let num = 5;
let result = 1;

for (let i = 1; i <= num; i++) {
  result *= i;
}
console.log(result);
