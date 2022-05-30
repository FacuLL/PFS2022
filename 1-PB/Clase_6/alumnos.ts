import * as rl from 'readline-sync'

function cargarArrayAlumnos(alumnos: any[], nAlumnos: number, nNotas:number) {
    alumnos[0] = new Array(nNotas+2)
    alumnos[0][0] = " Id "
    for (let i = 1; i <= nNotas; i++) {
        alumnos[0][i] = ` N${i} `
    }
    alumnos[0][nNotas+1] = "Prom"

    for (let i = 1; i <= nAlumnos; i++) {
        alumnos[i] = new Array(nNotas+2)
        alumnos[i][0] = i
        let suma: number = 0;
        for (let j = 1; j <= nNotas; j++) {
            alumnos[i][j] = rl.questionInt(`Ingrese la nota ${j} del alumno ${i}: `);
            while (alumnos[i][j] > 10 || alumnos[i][j] < 0) {
                alumnos[i][j] = rl.questionInt(`Ingrese una nota valida (0-10): `);
            }
            suma+=alumnos[i][j]
        }
        alumnos[i][nNotas+1] = Math.round(suma/nNotas);
    }
}

function mostrarArray2D(array: any[]) {
    for (let i = 0; i < array[0].length; i++) {
        let linea: String = "";
        for (let j = 0; j < array.length; j++) {
            linea+= array[j][i] + " "
        }
        console.log(linea)
    }
}

const cantAlumnos: number = rl.questionInt('Ingrese la cantidad de alumnos a evaluar: ')
const cantNotas: number = rl.questionInt('Ingrese la cantidad de notas por alumno: ')
const alumnos: any[] = new Array(cantAlumnos+1)

cargarArrayAlumnos(alumnos, cantAlumnos, cantNotas)
mostrarArray2D(alumnos)

