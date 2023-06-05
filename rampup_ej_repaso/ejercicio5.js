/*
Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). 
Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
*/

const getPrecioMostrarIVA = precio => {
    if(isNaN(precio) || precio == '' || precio ==  'undefined'){
        console.log('no es un formato correcto');
    }
    let precioIVA = precio * 0.21 + precio;
    return `${precioIVA} €`;
}

getPrecioMostrarIVA(2);