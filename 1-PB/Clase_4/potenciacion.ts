import * as rl from 'readline-sync';

function potencia(base:number, exponente:number):any {
    let resultado:number = base;

    for (let i = 1; i < exponente; i++) {
        resultado*=base;
    }
    return resultado;
}

const base:number = rl.questionFloat('Ingrese base de la potencia: ')
const exponente:number = rl.questionFloat('Ingrese exponente de la potencia: ')

if(exponente == 0) {
    console.log(1)
}
else if (exponente > 0) {
    console.log(potencia(base, exponente))
}
else {
    console.log("El exponente debe ser mayor a 0");
}
