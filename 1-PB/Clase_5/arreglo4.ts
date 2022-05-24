import * as rl from 'readline-sync';

let cantidadNumeros: number = rl.questionInt('Ingrese la cantidad de numeros: ');
let numeros: number[] = new Array(cantidadNumeros);
let suma: number = 0;
for (let i = 0; i < cantidadNumeros; i++) {
    numeros[i] = rl.questionInt(`Ingrese el numero  ${i+1} a sumar: `);
    suma += numeros[i];
}
    
console.log(`El resultado de la suma de los ${cantidadNumeros} es ${suma}`);