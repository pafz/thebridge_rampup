// ### Variables ### 1
let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

const TAU = 2 * PI;

// ### Booleanos ### 5
let booleanoAnd = booleano1 && booleano2;

let booleanoNot = !booleano1;

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// ### Operadores ### 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// ### Bucles ### 10
let contarHasta10_2 = 0
for(; contarHasta10_2 < 10; contarHasta10_2++){}

let postI = 0;
let postJ = 0;
let i = 0;
while(i < 11){
    postI += postJ++;
    i++;
}

let sumaPares = 0;
for(let i = 0; i < 10; i++){
    if(i%2 == 0){
        sumaPares += i;
    }
}

// ### Variables ### 13
let variableValorNumerico = 333;

const MiNombre = 'Patricia'

const MiNumeroFav = 5500;

// ### Booleanos ### 16
let booleanoOr = booleano1 || booleano2;

let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || variableValorNumerico >= MiNumeroFav;

let seisNoEsNueve = 6 !== 9;

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

// ### Operadores ### 20
let valorSuma = MiNumeroFav + variableValorNumerico;

let valorResta = MiNumeroFav - variableValorNumerico;

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

let valorDivision = MiNumeroFav / 3;

// ### Operadores ### 24
let contarHasta10 = 0;
while (contarHasta10 !== 10){
    contarHasta10++;
}

let preI = 0;
let preJ = 0;
for(let i = 0; i < 11; i++){
    preI += ++preJ;
}

let sumaImpares = 0;
for(let i = 0; i < 10; i++){
    if(i%2 != 0){
        sumaImpares += i;
    }
}