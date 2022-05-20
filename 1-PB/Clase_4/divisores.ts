import * as rl from 'readline-sync';

function cantidadDivisores(numero:number): number {
    let suma: number = 0;
    for (let i = 1; i <= numero; i++) {
        if(numero%i==0) {
            suma++
        }
    }
    return suma;
}

console.log(cantidadDivisores(rl.questionInt("Ingresa el numero que deseas saber cantidad de divisores: ")))