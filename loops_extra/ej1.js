//Imprimir los números del 21 al 34 en la consola.
let num = 21;
while (num <= 34) {
  console.log(num);
  num++;
}

//Sumar los números del 1 al 10 y mostrar el resultado en la consola.
let numI = 0;
do {
  numI++;
  console.log(numI);
} while (numI < 10);

//Dado un array de números, imprimir en la consola la suma de todos los números.
const nums = [1, 22, 4, 99];
let sumTotal = 0;
for (let num of nums) {
  sumTotal += num;
}
console.log(sumTotal);

//Imprimir los números del 1 al 10 en la consola, pero solo los pares.
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Imprimir los números del 1 al 10 en la consola, pero solo los impares.
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " izzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}

//Dado un array de números, imprimir en la consola solo los números mayores a 5.
for (let num of nums) {
  if (num > 5) {
    console.log(num);
  }
}

//Dada una lista de nombres, imprimir solo los nombres que empiezan con la letra "A".
const names = ["Alex", "Alice", "Max", "Joel", "Andrew"];

for (let name of names) {
  if (name.charAt(0).toLocaleUpperCase() === "A") {
    console.log(name);
  }
}

//Dada una lista de números, encontrar el número más grande y el número más pequeño.

let numS = nums[0];
let numL = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (numS > nums[i]) {
    numS = nums[i];
  } else if (numL < nums[i]) {
    munL = nums[i];
  }
}
let numsCondition = {
  smallest: numS,
  largest: munL,
};
console.log(numsCondition);
