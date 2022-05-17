import * as rl from 'readline-sync';

const minimo: number = rl.questionInt('Ingrese el numero minimo: ')
const maximo: number = rl.questionInt('Ingrese el numero maximo: ')

let suma: number = 0
for (let i = minimo; i <= maximo; i++) {
    suma+=i   
}
console.log(suma)