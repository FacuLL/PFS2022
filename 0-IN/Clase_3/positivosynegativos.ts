import * as rl from 'readline-sync';

let positivos: number = 0
let negativos: number = 0

let parar: boolean = false
while(parar == false) {
    let numero: number = rl.questionFloat('Ingrese numero: ')
    if (numero > 0 && numero != 0) {
        positivos++
    }
    else if (numero < 0 && numero != 0) {
        negativos++
    }
    else {parar = true}
}

let total = positivos + negativos
console.log("Porcentaje positivos: " + (positivos * 100 / total) + "%")
console.log("Porcentaje negativos: " + (negativos * 100 / total) + "%")
