import * as rl from 'readline-sync';
let cantNumeros: number = rl.questionInt("Ingrese la cantidad de numeros: ");
let numerosInverso: number[] = new Array(cantNumeros);
for (let index = 0; index < cantNumeros; index++) {
    numerosInverso[cantNumeros-index-1] = rl.questionInt(`Ingrese el numero ${index+1}: `);

}
console.log(`La salida es ${numerosInverso.join(' ')}`);