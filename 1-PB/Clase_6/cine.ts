import * as rl from 'readline-sync'

function rellenarSillasAleatoreo(sillas: boolean[]) {
    for (let i = 0; i < sillas.length; i++) {
        sillas[i] = !!Math.floor(Math.random() * 2)
    }
}

function contarSillasDesocupadas(sillas: boolean[]):number {
    let suma: number = 0;
    for (let i = 0; i < sillas.length; i++) {
        if(sillas[i]) {suma++}
    }
    return suma;
}

const cantSillas: number = rl.questionInt('Ingrese la cantidad de sillas: ')
let sillas: boolean[] = new Array(cantSillas)
rellenarSillasAleatoreo(sillas)
console.log(`La cantidad de sillas desocupadas son ${contarSillasDesocupadas(sillas)}`)