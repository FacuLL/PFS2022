import * as rl from 'readline-sync';

const dados: number = rl.questionInt('Cantidad de dados a tirar: ')

console.log("La posibilidad de sacar todos los dados 6 es de 1/" + 6**dados)