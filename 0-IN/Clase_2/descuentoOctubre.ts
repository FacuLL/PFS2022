// Importamos libreria para poder tomar datos del usuario
import * as rl from 'readline-sync';

// Imprimimos explicación
console.log("Este programa informará si el cliente tiene descuento o no (solo en octubre).")
console.log("")

// Pedimos el número al usuario los datos
let precio: number = rl.questionInt("Inserte precio: ");
let cantidad: number = rl.questionInt("Inserte cantidad: ");
let mes: number = rl.questionInt("Inserte mes (1-12): ");

// Se corrobora que el mes sea válido (1-12)
if (mes > 0 && mes <= 12) {
    // Si el mes es 8 (octubre) se informa que el cliente tiene descuento
    if (mes == 8) {
        console.log("El cliente tiene descuento")
    }
    // Si no, se informa que no
    else {
        console.log("El cliente no tiene descuento")
    }
}
// Si el mes no es valido, se informa
else {
    console.log("Mes invalido")
}