import * as rl from 'readline-sync';

console.log('Ingrese números para saber cual es el minimo, el maximo y la media. Si ingresa 0 el programa para')

let parar: boolean = false
let maximo: number;
let minimo: number;
let suma:number = 0
let cantidad:number = 0
while(!parar) {
    let numero = rl.questionInt('Ingrese numero:')
    if(numero == 0) {parar = true}
    if (!maximo || numero > maximo && numero != 0) {
        maximo = numero
        suma=+numero
        cantidad++
    }
    if (!minimo || numero < minimo && numero != 0) {
        minimo = numero
        suma=+numero
        cantidad++
    }
}
console.log("Numero minimo: " + minimo)
console.log("Numero maximo: " + maximo)
console.log("Media: " + (suma/cantidad));
