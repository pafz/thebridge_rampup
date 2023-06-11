/*
Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. 
Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.
*/
let masLarga;

const cadenaMasLarga = (cadenas) => {
  masLarga = cadenas[0];
  for (const cadena of cadenas) {
    if (cadena.length > masLarga.length) {
      masLarga = cadena;
    }
  }
  console.log(masLarga);
};

cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
