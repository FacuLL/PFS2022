"use strict";
exports.__esModule = true;
// Importamos readline-sync para utilizar las inputs desde la consola
var rl = require("readline-sync");
// Solicitamos al usuario los valores
var vuelta1 = rl.questionFloat('Ingrese tiempo de vuelta 1 (seg): ');
var vuelta2 = rl.questionFloat('Ingrese tiempo de vuelta 2 (seg): ');
var vuelta3 = rl.questionFloat('Ingrese tiempo de vuelta 3 (seg): ');
var vuelta4 = rl.questionFloat('Ingrese tiempo de vuelta 4 (seg): ');
// Calculamos la suma de los valores y lo imprimimos en la consola
console.log('Tiempo total (seg): ' + (vuelta1 + vuelta2 + vuelta3 + vuelta4));
// Calculamos el promedio de los valores (suma dividido cantidad de valores) y lo imprimimos en la consola
console.log('Promedio (seg/vuelta): ' + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4));
