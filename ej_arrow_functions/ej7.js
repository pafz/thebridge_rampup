/* Filter
Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
*/
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const inventory300 = inventory.filter((inventory) => {
  if (inventory.price > 300) {
    console.log(inventory.name);
  }
});
