// Importamos libreria para poder tomar datos del usuario
import * as rl from 'readline-sync';

// Pedimos los datos del precio del producto y la cantidad al usuario
var precio: number = rl.questionFloat("Ingrese el precio del producto: ")
var cantidad: number = rl.questionFloat("Ingrese la cantidad del producto: ")

// Si el precio es mayor a 1000, se imprime el precio del producto con el descuento aplicado
if(precio*cantidad > 1000) {
    var descuento: number = precio * cantidad * 0.1
    console.log("El precio final del producto, con descuento, es: " + (precio * cantidad - descuento) + "$")
}
// Si no, se imprime el precio del producto solo
else {
    console.log("El precio final del producto es: " + precio * cantidad + "$")
}