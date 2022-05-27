import * as rl from 'readline-sync'

const n: number = rl.questionInt('Ingrese la cantidad de productos: ')
let v1: number[] = new Array(n)
let v2: number[] = new Array(n)
let producto: number = 0;

for (let i = 0; i < n; i++) {
    v1[i] = rl.questionFloat(`Ingrese numero ${i+1} de la v1: `)
    v2[i] = rl.questionFloat(`Ingrese numero ${i+1} de la v2: `)
    producto+=v1[i]*v2[i]
}

console.log(`El producto es ${producto}`)

