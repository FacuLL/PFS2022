import * as rl from 'readline-sync';

const cantidadNotas : number = rl.questionInt("Ingrese la cantidad de notas: ")

let suma : number = 0
for (let nota = 1; nota <= cantidadNotas; nota++) {
    suma += rl.questionFloat("Ingrese nota " + nota + ": ")
}

console.log('Total: ' + suma)
console.log('Promedio: ' + (suma/cantidadNotas))