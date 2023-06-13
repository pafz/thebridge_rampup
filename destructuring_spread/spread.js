const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};
//mergea pokemons, solo aparece uno. Se sobreescribe

const mergePokemon = { ...pokemon, ...pikachu };
console.log(mergePokemon);

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos. .REDUCE SUMA
const sumEveryOther = (...nums) => {
  console.log(
    nums.reduce((accumulator, currentValue) => accumulator + currentValue)
  );
};

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números. let numerosFiltrados = numeros.filter(numero => numero > 5)

const addOnlyNums = (...args) => {
  return args
    .filter((arg) => !isNaN(arg) === true)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(addOnlyNums(1, "perro", 2, 4));

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
let c = 0;
const countTheArgs = (...args) => {
  args.forEach((element) => {
    c++;
  });
  console.log(c);
};

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

//Escribe una función llamada combineTwoArrays que reciba dos array como argumentos y devuelva solo un array que combine los dos (usando Spread Operator).
const combineTwoArrays = [...arr1, ...arr2];
console.log(combineTwoArrays);
