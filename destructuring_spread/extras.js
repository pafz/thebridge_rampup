const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana.
let { yesterday, today, tomorrow } = HIGH_TEMPERATURES;
let maximaHoy = yesterday;
let maximaManana = tomorrow;
console.log(maximaHoy, maximaManana);

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (...args) => {
  const filtroUnique = args.filter((arg, i) => i == args.indexOf(arg));
  return filtroUnique;
};

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
const combineAllArrays = (...args) => {
  const combined = [args.reduce((a, b) => a + b)];
  return combined;
};

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. INICIALIZAR SIEMPRE!
const sumAndSquare = (...args) => {
  return args.reduce((acumulator, number) => acumulator + number * number, 0);
};

const result = sumAndSquare(2, 3, 4);
console.log(result);

const test = [2, 4];
console.log(test.reduce((a, n) => a + n));
