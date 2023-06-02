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
    // .normalize() devuelve la forma de normalización Unicode de la string
    // Uno de "NFC", "NFD", "NFKC"o "NFKD", especificando el formulario de normalización Unicode
    // Significa Global y hace que la llamada reemplace todas las coincidencias, no solo la primera g.replace
    // regex para que coincida con el rango U+0300 → U+036F

    let fraseMinusNormalChar = removeAccents(fraseMinus);
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





/* for(const _ of _ )      se puede usar con strings, no solo arrays

    let palabra = 'Abecedario'
2	let seleccionLetra = 'a'
3	
4	
5	const chcount = (palabra, selec) => {
6	    let counter = 0;
7	    for (const letra of palabra) 
8	    {
9	     if(selec == letra.toLowerCase()){
10	        counter++
11	     }
12	    }
13	    return counter;
14	}
15	
16	console.log(chcount(palabra, seleccionLetra))




*/