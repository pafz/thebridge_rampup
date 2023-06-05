/*
Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".
*/
let vocales = 0;

const cuentaVocales = myString => {
    if(typeof myString != 'string' || myString == '' || myString == 'undefined'){
        return 'Debo ser ejecutada con un string';
    }
    let lower = myString.toLowerCase();
    let arrCompleta = lower.split('');
    for(let i in arrCompleta){
        if(arrCompleta[i] == 'a' || arrCompleta[i] == 'e' || arrCompleta[i] == 'i' || arrCompleta[i] == 'o' || arrCompleta[i] == 'u'){
            vocales++;
        }
    }
    return vocales;
}

//cuentaVocales('holaaaaaaeiOu');
//cuentaVocales(7)