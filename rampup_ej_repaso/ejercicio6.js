/*
Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". 
Si el string tiene menos de dos caracteres, debe devolver el primer carácter.
*/

const penultimoCaracter = myString => {
    if(typeof myString != 'string' || myString == '' || myString == 'undefined'){
        return 'Debo ser ejecutada con un string';
    } else if (myString.length < 2){
        return myString.chartAt(0);
    }
    return myString.slice(-1);
}

//penultimoCaracter('music');
//penultimoCaracter('');
//penultimoCaracter('a')