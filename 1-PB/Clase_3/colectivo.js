"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var chalk = require("chalk");
console.log(chalk.magenta.bgYellowBright("Espera a que el colectivo llegue"));
var llegoColectivo = false;
function esperar() {
    var llego = rl.question(chalk.blue("Llego? ")).toLowerCase();
    if (llego == "si" || llego == "s") {
        llegoColectivo = true;
    }
}
while (!llegoColectivo) {
    esperar();
}
console.log("Subió al colectivo");
chalk.gray.bgWhite();
