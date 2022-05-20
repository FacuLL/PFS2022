import * as rl from 'readline-sync';

function esMultiplo(numero1:number, numero2:number): boolean {
    return numero2%numero1==0
}

function cantidadDivisores(numero:number): number {
    let suma: number = 0;
    for (let i = 1; i <= numero; i++) {
        if(esMultiplo(i, numero)) {
            suma++
        }
    }
    return suma;
}

console.log(cantidadDivisores(rl.questionInt("Ingresa el numero que deseas saber cantidad de divisores: ")))