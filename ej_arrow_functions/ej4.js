/* Crea un segundo array que devuelva los impares FILTER*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberImpair = numbers.filter((number) => {
  if (number % 2 !== 0) {
    return number;
  }
});
console.log(numberImpair);
/*
Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */
const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];

const veganFood = foodList.filter((food) => {
  if (food.isVeggie) {
    console.log(`Que rico ${food.name} me voy a comer!`);
  }
});
