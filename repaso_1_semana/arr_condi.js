/*
Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
mal test 4, 5, 6. Creación de obj, arr en obj 
*/

const ordenador = {
  marca: "Asus",
  tipo: "portátil",
  perifericos: { touchpad: true },
  almacenamiento: { discos: ["SSD"] },
  procesador: { velocidad: "2.5 GHz" },
};

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (ordenador.marca === "Asus") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos.touchpad === true) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 5
if (ordenador.almacenamiento.discos[0] === "SSD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (ordenador.procesador.velocidad === "2.5 GHz") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
