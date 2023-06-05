/*
Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". 
Si el string tiene menos de tres caracteres, debe devolver el string completo.
*/

const primerosTresCaracteres = myString => {
    if(typeof myString != 'string'){
        return 'Debo ser ejecutada con un string';
    } 
    if(myString.length < 3){
        return myString;
    }
    myString.substr(0, 3);
}

