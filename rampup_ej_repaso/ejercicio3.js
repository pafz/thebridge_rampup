/*
Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

*/
arr = [5, 2, 3];
let sum = 0;

const sumaTresNumeros = arr => {
    for(let i in arr){
        console.log(arr[i]);
        if(arr[i] == '' || isNaN(arr[i]) || arr[i] == 'undefined'){
            return 'Debo ser ejecutada con números';
        }
        console.log(arr[i]);
        sum += arr[i];
    }
    console.log(sum)
}

sumaTresNumeros(arr);