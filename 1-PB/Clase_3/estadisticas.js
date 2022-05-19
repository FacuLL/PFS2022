"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
console.log('Ingrese números para saber cual es el minimo, el maximo y la media. Si ingresa 0 el programa para');
var parar = false;
var maximo;
var minimo;
var suma = 0;
var cantidad = 0;
while (!parar) {
    var numero = rl.questionInt('Ingrese numero:');
    if (numero == 0) {
        parar = true;
    }
    if (!maximo || numero > maximo && numero != 0) {
        maximo = numero;
        suma = +numero;
        cantidad++;
    }
    if (!minimo || numero < minimo && numero != 0) {
        minimo = numero;
        suma = +numero;
        cantidad++;
    }
}
console.log("Numero minimo: " + minimo);
console.log("Numero maximo: " + maximo);
console.log("Media: " + (suma / cantidad));
