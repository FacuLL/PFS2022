import * as rl from 'readline-sync';

console.log('Ingrese números para saber cual es el minimo y cual es el maximo. Si ingresa 0 el programa para (tambien se cuenta)')

let parar: boolean = false
let maximo: number;
let minimo: number;
while(!parar) {
    let numero = rl.questionFloat('Ingrese numero:')
    if(numero == 0) {parar = true}
    if (!maximo || numero > maximo && numero != 0) {
        maximo = numero
    }
    if (!minimo || numero < minimo && numero != 0) {
        minimo = numero
    }
}
console.log("Numero minimo: " + minimo)
console.log("Numero maximo: " + maximo)