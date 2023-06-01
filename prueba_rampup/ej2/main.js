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

