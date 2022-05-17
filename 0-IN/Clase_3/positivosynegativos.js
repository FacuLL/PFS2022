"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var positivos = 0;
var negativos = 0;
var parar = false;
while (parar == false) {
    var numero = rl.questionFloat('Ingrese numero: ');
    if (numero > 0 && numero != 0) {
        positivos++;
    }
    else if (numero < 0 && numero != 0) {
        negativos++;
    }
    else {
        parar = true;
    }
}
var total = positivos + negativos;
console.log("Porcentaje positivos: " + (positivos * 100 / total) + "%");
console.log("Porcentaje negativos: " + (negativos * 100 / total) + "%");
