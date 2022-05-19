"use strict";
exports.__esModule = true;
// Importamos libreria para poder tomar datos del usuario
var rl = require("readline-sync");
// Imprimimos explicación
console.log("Este programa devolverá true o false según el número es par o impar. Si es 0, lo informará");
console.log("");
// Pedimos el número al usuario
var numero = rl.questionInt("Inserte numero: ");
// Si el número es distinto a 0, creará la variable que determina si el numero es par o impar y lo imprime
if (numero != 0) {
    var parOImpar = numero % 2 == 0 ? true : false;
    console.log(parOImpar);
}
// Si no, informa que el número es 0
else {
    console.log("El numero es 0");
}
