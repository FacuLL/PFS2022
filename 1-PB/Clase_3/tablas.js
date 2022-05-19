"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var numero = rl.questionFloat('Ingrese numero para ver tablas: ');
for (var i = 0; i <= 10; i++) {
    console.log(numero * i);
}
