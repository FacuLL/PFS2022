import * as rl from 'readline-sync';

let num: number[] = new Array(5);
for (let i = 0; i < 5; i++) {
    num[i] = rl.questionInt(`Inserte numero para la posicion ${i+1}`);
}
console.log('');
for (let i = 0; i < num.length; i++) {
    let element: number = num[i];
    console.log(`El numero en la posicion ${i+1} es ${element}`);
}
