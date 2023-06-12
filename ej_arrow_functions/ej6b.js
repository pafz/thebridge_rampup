//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:Como soy de Valencia, amo comer Paella; Aunque no como carne, el Entrecot es sabroso
// https://stackoverflow.com/questions/43170806/merge-multiple-arrays-based-on-their-index-using-javascript

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const ciudades = ["Italia", "Japón", "Valencia", ""];

const cityListSentences = ciudades.map((ciudad, i) => {
  if (i === ciudad.length - 1) {
    return;
  } else {
    return `Como soy de ${ciudad} amo comer `;
  }
});

const foodSentence = cityListSentences.map((city, i) => {
  if (i === foodList.length - 1) {
    return `Aunque no como carne, el ${foodList[i]} es sabroso`;
  }
  return city + foodList[i];
});

console.log(foodSentence);
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */
