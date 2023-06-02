//PATRICIA FERNÁNDEZ ZAMANILLO
//num user
//que sea num
//impares
let num;
let numMax;




const startNumber = () => {
    do {
        num = prompt("Please, insert a number");
    } while (isNaN(num))
    num = parseInt(num);
    calcularImpares(num);
}

const calcularImpares = num => {
    numMax = num + 50;
    for(let i= 5; i <= numMax; i++){
        if(i%2 !== 0){
            console.log(i);
            i +=1;
        }
        i +=1;
        console.log(i); 
    }
}

startNumber();

/*
// Pedir numero
const pedirn = () => {
  let numero = prompt("¿Qué número desea elegir?");
  
  while (isNaN(numero) || numero == 0 || numero == '' || numero == undefined) {
    numero = prompt("No has ingresado un número o has ingresado 0, por favor, escribe un numero valido");
  }
  return parseInt(numero);
};

// Imprimir por pantalla array
const imprimirArray = (lista) => {
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  p.innerText = lista;
  document.body.append(p);
};

*/
