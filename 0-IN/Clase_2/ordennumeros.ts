// Importamos libreria para poder tomar datos del usuario
import * as rl from 'readline-sync';

// Imprimimos explicación
console.log("Este programa recibe tres numeros y los devuelve ordenados de mayor a menor")
console.log("")

// Pedimos los tres números al usuario
let a: number = rl.questionFloat("Inserte numero 1: ");
let b: number = rl.questionFloat("Inserte numero 2: ");
let c: number = rl.questionFloat("Inserte numero 3: ");

// Va agregando a la variable orden los numeros de mayor a menor, separados por espacios
let orden: string = "";
if (a >= b && a >= c) {
    orden += a
    if (b>=c) {
        orden += " " + b
        orden += " " + c
    }
    else {
        orden += " " + c
        orden += " " + b
    }
}
else if(b >= a && b >= c) {
    orden += b
    if (a>=c) {
        orden += " " + a
        orden += " " + c
    }
    else {
        orden += " " + c
        orden += " " + a
    }
}
else {
    orden += c
    if (a>=b) {
        orden += " " + a
        orden += " " + b
    }
    else {
        orden += " " + b
        orden += " " + a
    }
}

// Imprime la variable orden
console.log(orden)
// Imprime el mayor número
console.log("El mayor de los tres es " + orden.split(" ")[0])