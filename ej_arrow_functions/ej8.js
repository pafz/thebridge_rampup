/* Reduce
Concatena todos los elementos del array con reduce para que devuelva una sola frase
*/

const sentenceElements = [
  "Me",
  "llamo",
  "Patricia",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];
let sentenceElementReduced = [];

sentenceElementReduced = sentenceElements.reduce((a, b) => {
  return a + " " + b;
}, []);
console.log(sentenceElementReduced);
