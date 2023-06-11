/*Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que 
hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.*/
let total = 0;

const contarCaracteres = (palabras) => {
  let stringPalabra = palabras.toString();
  console.log(stringPalabra);

  let sinComas = stringPalabra.replaceAll(",", "");
  console.log(sinComas);

  total = sinComas.length;
  console.log(total);
};

contarCaracteres(["Hola", "Mundo"]); // Devuelve 9
contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 18
