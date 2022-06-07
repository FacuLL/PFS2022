// Correcciones realizadas:
//      - Para empezar, el programa no importa las librerias necesarias.
//      - Algunas variables tienen nombres inentendibles que no referencian a lo que contienen.
//      - La funcion que deberia retornar un numero, no lo hace
//      - La sintaxis no utiliza llaves, lo que es fundamental para la organización de cada bucle, condicional y función
//      - No hay separación entre las lineas
//      - Las funciones normalmente se inicializan primero, luego se ejecuta el codigo "main"
//      - Las funciones no tienen nombres acordes a su propósito.
//      - Las funciones no especifican el tipo de dato que devuelven.
//      - Las funciones no especifican los tipos de datos de sus parámetros.
//      - No se utilizan puntos y comas.
//      - La identación del programa es inadecuada.
//      - El codigo no se encontraba comentado, lo cual es esencial para el entendimiento del mismo

// Algoritmo secreto
// Se encarga de rellenar n arreglo (de dimensión determinada por el usuario) con números aleatorios entre 0 y 100.
// Luego, le pide al usuario un número y se encarga de analizar y contar cuántas veces se encuentra ese número en el arreglo.
// Para finalizar, el programa imprime el arreglo, con los números separados por un espacio.

// Importamos las librerias necesarias
import * as readlineSync from 'readline-sync';

// Función que permite cargar un arreglo con números enteros aleatorios entre 0 y 100
function cargarArregloConAleatorios(v: number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i]=Math.floor(Math.random()*100);
    }
}

// Función que permite contar un determinado número en un arreglo
function contarNumeroEnArreglo(v: number[], n: number): number {
    let suma = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] == n) {
            suma += 1;
        }
    }
    return suma;
}

// Función que permite imprimir en la terminal un determinado array
function mostrarArray(v: number[], n: number) {
    let cadena = "";
    for (let i = 0; i < v.length; i++) {
        cadena += v[i] + " ";
    }
    console.log(cadena);
}

// El usuario ingresa la dimension del arreglo y se inicializa.
let dimension: number = readlineSync.questionInt("Ingrese tamaño: ");
let arreglo: number[] = new Array(dimension);
// El arreglo se carga con números enteros aleatorios entre 0 y 100.
cargarArregloConAleatorios(arreglo);
// El usuario ingresa el numero a contar en el arreglo.
let nro: number = readlineSync.questionInt("Ingrese numero: ");
// Se cuenta las veces que el numero aparece y se imprime.
let sumaNroEncontrado: number = contarNumeroEnArreglo(arreglo,nro);
console.log(`El numero ${nro} aparece ${sumaNroEncontrado} veces en el arreglo`);
// Se imprime el arreglo.
mostrarArray(arreglo, dimension);