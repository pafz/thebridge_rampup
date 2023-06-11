//Dado un array de números, imprimir en la consola la suma de todos los números.
const nums = [3, 44, 8, 999999999];
let sum = 0;

for (const num of nums) {
  sum += num;
}
console.log(sum);
