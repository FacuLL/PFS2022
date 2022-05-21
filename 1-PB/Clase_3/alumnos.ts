import * as rl from 'readline-sync';

const alumnos= rl.questionInt('Cantidad de alumnos: ')

for (let i = 1; i <= alumnos; i++) {
    const nombre = rl.question('Ingrese nombre del alumno ' + i + ": ")
    const practica = rl.questionFloat('Ingrese nota de parte practica: ')
    const problemas = rl.questionFloat('Ingrese nota de parte de problemas: ')
    const teorica = rl.questionFloat('Ingrese nota de parte teorica: ')

    if (practica >= 0 && practica <= 10 && problemas >= 0 && problemas <= 10 && teorica >= 0 && teorica <= 10) {
        const total = practica * 0.1 + problemas * 0.5 + teorica * 0.4
        console.log('La nota del alumno ' + nombre + ' es ' + total)
        console.log("")
    }
    else {
        console.log("Debes ingresar numeros entre 0 y 10")
        i--
    }
}