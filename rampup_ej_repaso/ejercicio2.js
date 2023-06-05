/*
Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". 
Debes utilizar un condicional if/else.
*/

let edad = prompt('Inserta tu edad');
if(edad < 18){
    console.log('Eres menor de edad');
} else if (edad >= 18 && edad < 65 ){
    console.log('Eres mayor de edad');
} else {
    console.log('Eres un adulto mayor');
}
