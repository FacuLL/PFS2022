"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var minimo = rl.questionInt('Ingrese el numero minimo: ');
var maximo = rl.questionInt('Ingrese el numero maximo: ');
var suma = 0;
for (var i = minimo; i <= maximo; i++) {
    suma += i;
}
console.log(suma);
