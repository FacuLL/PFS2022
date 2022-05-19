"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var dados = rl.questionInt('Cantidad de dados a tirar: ');
console.log("La posibilidad de sacar todos los dados 6 es de 1/" + Math.pow(6, dados));
