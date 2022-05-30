import * as rl from 'readline-sync';

let cantidadNombres: number = rl.questionInt('Ingrese la cantidad de nombres: ');
let nombres: number[] = new Array(cantidadNombres);
for (let i = 0; i < cantidadNombres; i++) {
    nombres[i] = rl.question(`Inserte el nombre de la persona ${i+1}: `);
    console.log(`${i+1}. ${nombres[i]}`);
}
    