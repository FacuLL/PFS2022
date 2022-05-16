"use strict";
exports.__esModule = true;
// Importamos libreria para poder tomar datos del usuario
var rl = require("readline-sync");
// Imprimimos explicación
console.log("Este programa recibe tres numeros y los devuelve ordenados de mayor a menor");
console.log("");
// Pedimos los tres números al usuario
var a = rl.questionFloat("Inserte numero 1: ");
var b = rl.questionFloat("Inserte numero 2: ");
var c = rl.questionFloat("Inserte numero 3: ");
// Va agregando a la variable orden los numeros de mayor a menor, separados por espacios
var orden = "";
if (a >= b && a >= c) {
    orden += a;
    if (b >= c) {
        orden += " " + b;
        orden += " " + c;
    }
    else {
        orden += " " + c;
        orden += " " + b;
    }
}
else if (b >= a && b >= c) {
    orden += b;
    if (a >= c) {
        orden += " " + a;
        orden += " " + c;
    }
    else {
        orden += " " + c;
        orden += " " + a;
    }
}
else {
    orden += c;
    if (a >= b) {
        orden += " " + a;
        orden += " " + b;
    }
    else {
        orden += " " + b;
        orden += " " + a;
    }
}
// Imprime la variable orden
console.log(orden);
// Imprime el mayor número
console.log("El mayor de los tres es " + orden.split(" ")[0]);
