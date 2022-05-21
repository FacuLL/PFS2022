import * as rl from 'readline-sync';

function esMultiplo(numero1:number, numero2:number): boolean {
    return numero2%numero1==0
}

const numero1:number = rl.questionFloat('Ingrese el numero 1 (Numero base): ')
const numero2:number = rl.questionFloat('Ingrese el numero 2 (Numero que se sabra si es multiplo del 1): ')

console.log(esMultiplo(numero1, numero2))