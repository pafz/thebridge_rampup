//PATRICIA FERNÁNDEZ ZAMANILLO
let frase = 'Hola queee tal';
let letra = 'e';
let counter = 0;

let fraseMinus = frase.toLocaleLowerCase();
console.log(fraseMinus);

const arrFrase = fraseMinus.split('');
console.log(arrFrase)

for(let i = 0; i < arrFrase.length; i++){
    if(letra === arrFrase[i]){
        counter += 1;
    }
}
console.log(counter);