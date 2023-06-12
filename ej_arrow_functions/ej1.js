//Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}
const saludar = () => "Hola";
//
function division(a, b) {
  return a / b;
}
const division = (a, b) => a / b;
//
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
//
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}

const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
//
