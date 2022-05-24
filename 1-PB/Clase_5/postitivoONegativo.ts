import * as rl from 'readline-sync';
let cantNumeros: number = rl.questionInt("Ingrese la cantidad de numeros: ");
let numeros: number[] = new Array(cantNumeros);
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;
let total:number = 0;
for (let index = 0; index < cantNumeros; index++) {
    numeros[index] = rl.questionInt(`Ingrese el numero ${index+1}: `);
    if (numeros[index] == 0) {
        ceros++;
    }
    else if (numeros[index] > 0) {
        positivos++;
    }
    else {
        negativos++;
    }
    total++;
}
console.log(`Positivos: ${positivos} (${positivos/total*100}%)`);
console.log(`Negativos: ${negativos} (${negativos/total*100}%)`);
console.log(`Negativos: ${negativos} (${negativos/total*100}%)`);