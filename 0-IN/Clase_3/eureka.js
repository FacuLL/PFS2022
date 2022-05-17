"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var intentos = 3;
for (var i = intentos; i > 0; i--) {
    if (rl.question('Ingrese la frase secreta (' + i + " intentos restantes): ") != "eureka") {
        console.log("Intente nuevamente");
    }
    else {
        i = -1;
    }
}
if (i == 0) {
    console.log('No acertaste, mala suerte');
}
