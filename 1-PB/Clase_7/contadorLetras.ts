// Este programa cuenta cada caracter de una frase y las muestra

import * as rl from 'readline-sync'

let frase: string = rl.question('Ingresa la frase para contar los caracteres: ')

let caracteres: string[] = [];
let cantLetras: number[] = [];

contarLetras(frase, caracteres, cantLetras);
listarCantCaracteres(caracteres, cantLetras);

function contarLetras(frase: string, caracteres: string[], cantidades: number[]) {
    for (let i = 0; i < frase.length; i++) {
        if(caracteres.indexOf(frase[i]) == -1) {
            caracteres.push(frase[i])
            cantidades.push(1)
        }
        else {
            cantidades[caracteres.indexOf(frase[i])]++
        }
    }
}

function listarCantCaracteres(caracteres:string[], cantidades: number[]) {
    for (let i = 0; i < caracteres.length; i++) {
        console.log(`"${caracteres[i]}": ${cantidades[i]}`)
    }
}