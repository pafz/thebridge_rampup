/*Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, 
es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original. */
const sinDuplicados = [];

const eliminarDuplicados = (elementos) => {
  sinDuplicados.push(elementos[0]);
  for (let i = 0; i < elementos.length; i++) {
    if (sinDuplicados.includes(elementos[i]) === false) {
      sinDuplicados.push(elementos[i]);
    }
  }
  console.log("Devuelve " + sinDuplicados);
};

//salida
eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]
