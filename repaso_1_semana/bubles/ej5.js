//Dado un array de números, imprimir en la consola solo los números impares.
const nums = [3334, 6, 77, 0, 22, 3, 5];
for (const num of nums) {
  if (num % 2 != 0) {
    console.log(num);
  }
}
