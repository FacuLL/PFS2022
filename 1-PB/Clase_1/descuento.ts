// Guardamos en una constante el valor al que queremos aplicarle el descuento (en $)
const valor = 113543
// Guardamos en una constante el descuento a aplicar en %
const descuento = 30

// Creamos la funcion que ejecute el calculo matematico para calcular el descuento y lo devuelva
function aplicarDescuento(valor, descuento) {
    return valor * descuento / 100
}

// Ejecutamos la funcion con los valores establecidos en las variables y lo mostramos en la consola
console.log(aplicarDescuento(valor, descuento))
