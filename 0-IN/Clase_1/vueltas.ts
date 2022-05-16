// Importamos readline-sync para utilizar las inputs desde la consola
import * as rl from 'readline-sync';

// Solicitamos al usuario los valores
let vuelta1: number = rl.questionFloat('Ingrese tiempo de vuelta 1 (seg): ');
let vuelta2: number = rl.questionFloat('Ingrese tiempo de vuelta 2 (seg): ');
let vuelta3: number = rl.questionFloat('Ingrese tiempo de vuelta 3 (seg): ');
let vuelta4: number =  rl.questionFloat('Ingrese tiempo de vuelta 4 (seg): ');

// Calculamos la suma de los valores y lo imprimimos en la consola
console.log('Tiempo total (seg): ' + (vuelta1 + vuelta2 + vuelta3 + vuelta4))
// Calculamos el promedio de los valores (suma dividido cantidad de valores) y lo imprimimos en la consola
console.log('Promedio (seg/vuelta): ' + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4))