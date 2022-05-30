import * as rl from 'readline-sync';
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
for (let index = 0; index < 6; index++) {
    v1[index] = rl.questionInt(`Ingrese el numbero ${index+1} de la v1:`);
    v2[index] = rl.questionInt(`Ingrese el numbero ${index+1} de la v2:`);
    vSuma[index] = v1[index] + v2[index];
}
console.log("V1: "+v1);
console.log("V2: "+v2);
console.log("Vsuma: "+vSuma);