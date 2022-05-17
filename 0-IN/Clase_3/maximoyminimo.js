"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
console.log('Ingrese números para saber cual es el minimo y cual es el maximo. Si ingresa 0 el programa para (tambien se cuenta)');
var parar = false;
var maximo;
var minimo;
while (!parar) {
    var numero = rl.questionFloat('Ingrese numero:');
    if (numero == 0) {
        parar = true;
    }
    if (!maximo || numero > maximo) {
        maximo = numero;
    }
    if (!minimo || numero < minimo) {
        minimo = numero;
    }
}
console.log("Numero minimo: " + minimo);
console.log("Numero maximo: " + maximo);
