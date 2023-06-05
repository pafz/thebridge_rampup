/*
Crea un botón en tu archivo HTML
Llama a ese botón en tu archivo js y muestralo por consola
Crea una función que cuando se ejecute muestra un alert que diga “Hola” 
addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.
*/

//Llama a ese botón en tu archivo js y muestralo por consola
const button = document.querySelector('button');
console.log(button);

//Crea una función que cuando se ejecute muestra un alert que diga “Hola” 
const mostrarAlet = () => {
    alert('Hola');
}

//addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.
button.addEventListener('click', mostrarAlet);