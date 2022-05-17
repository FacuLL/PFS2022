"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var alumnos = rl.questionInt('Cantidad de alumnos: ');
for (var i = 1; i <= alumnos; i++) {
    var nombre = rl.question('Ingrese nombre del alumno ' + i + ": ");
    var practica = rl.questionFloat('Ingrese nota de parte practica: ');
    var problemas = rl.questionFloat('Ingrese nota de parte de problemas: ');
    var teorica = rl.questionFloat('Ingrese nota de parte teorica: ');
    if (practica >= 0 && practica <= 10 && problemas >= 0 && problemas <= 10 && teorica >= 0 && teorica <= 10) {
        var total = practica * 0.1 + problemas * 0.5 + teorica * 0.4;
        console.log('La nota del alumno ' + nombre + ' es ' + total);
        console.log("");
    }
    else {
        console.log("Debes ingresar numeros entre 0 y 10");
    }
}
