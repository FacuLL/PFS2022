"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
// Definimos funcion para obtener el area de un cuadrado
function areacuadrado(base, altura) {
    // Multiplicamos la base por la altura, devolviendo el resultado
    return base * altura;
}
// Función principal del programa
function main() {
    // Definimos base y altura del cuadrado, solicitando los datos al usuario
    var base = rl.question("Ingrese la base del cuadrado (cm): ");
    var altura = rl.question("Ingrese la altura del cuadrado (cm): ");
    // Si las variables son numeros se ejecuta, si no se advierte y se vuelve a comenzar el programa
    if (Number(base) && Number(altura)) {
        // Se ejecuta la funcion para calcular el area y se envia a la consola el valor
        console.log("El area del cuadrado es " + areacuadrado(Number(base), Number(altura)) + " cm");
    }
    else {
        console.log("Debes ingresar números!");
        main();
    }
    // Preguntamos al usuario si quiere calcular el area de otro cuadrado
    var next = rl.question("Calcular nuevamente? (si o no): ");
    // Si responde que si, se inicia main() nuevamente, si no se termina el programa
    if (next.toLowerCase() == "si" || next.toLowerCase() == "s") {
        main();
    }
}
// Se inicia el programa principal
main();
