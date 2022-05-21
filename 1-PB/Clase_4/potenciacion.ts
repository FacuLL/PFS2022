import * as rl from 'readline-sync';

function potencia(base:number, exponente:number):any {
    let resultado:number = base;
    if(exponente == 0) {
        resultado = 1;
    }
    else if (exponente > 0) {
        for (let i = 1; i < exponente; i++) {
            resultado*=base;
        }
    }
    else {
        return "El exponente debe ser mayor a 0";
    }
    return resultado;
}

const base:number = rl.questionFloat('Ingrese base de la potencia: ')
const exponente:number = rl.questionFloat('Ingrese exponente de la potencia: ')

console.log(potencia(base, exponente))