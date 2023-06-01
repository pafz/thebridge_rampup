//PATRICIA FERNÁNDEZ ZAMANILLO
const frase = 'Soy estudiante dé deçarrollo web';
let letra = 'e';
let counter = 0;

//pasarla a minúsculas
//eliminar tildes
//bucle para comprar cada char y añadirlo

const limpiarFrase = frase => {
    console.log(frase);

    let fraseMinus = frase.toLocaleLowerCase();
    console.log(fraseMinus);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    var fraseMinusNormalChar = removeAccents(fraseMinus);
    console.log(fraseMinusNormalChar); 

    let fraseSinEspacios = fraseMinusNormalChar.replace(/\s+/g, '')
    console.log(fraseSinEspacios);

    const arrFrase = fraseSinEspacios.split('');
    console.log(arrFrase);

    contarFrase(arrFrase);

}

const contarFrase = arrFrase => {
    for(let i = 0; i < arrFrase.length; i++){
        if(letra === arrFrase[i]){
            counter += 1;
            console.log(arrFrase[i])
        }
    }
    console.log(`${counter} veces aparece la letra ${letra} en la frase: '${frase}'.`)
}

limpiarFrase(frase);