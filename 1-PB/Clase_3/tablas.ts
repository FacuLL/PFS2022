import * as rl from 'readline-sync';

const numero: number = rl.questionFloat('Ingrese numero para ver tablas: ')

for (let i = 0; i <= 10; i++) {
    console.log(numero*i)
}