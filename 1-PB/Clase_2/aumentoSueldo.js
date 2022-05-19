"use strict";
exports.__esModule = true;
// Importamos libreria para poder tomar datos del usuario
var rl = require("readline-sync");
// Imprimimos explicación
console.log("Este programa devolverá cuanto aumento tendrá el usuario a partir de un salario");
console.log("");
// Pedimos el número al usuario los datos
var salario = rl.questionFloat("Inserte salario actual: ");
// Imprimimos el aumento según el rango del sueldo
if (salario >= 0 && salario <= 15000) {
    console.log("El aumento será de " + salario * 0.2 + "$");
}
else if (salario > 15000 && salario <= 20000) {
    console.log("El aumento será de " + salario * 0.1 + "$");
}
else if (salario > 20000 && salario <= 25000) {
    console.log("El aumento será de " + salario * 0.05 + "$");
}
else {
    console.log("El aumento será de 0$");
}
