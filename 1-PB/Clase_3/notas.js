"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var cantidadNotas = rl.questionInt("Ingrese la cantidad de notas: ");
var suma = 0;
for (var nota = 1; nota <= cantidadNotas; nota++) {
    suma += rl.questionFloat("Ingrese nota " + nota + ": ");
}
console.log('Total: ' + suma);
console.log('Promedio: ' + (suma / cantidadNotas));
