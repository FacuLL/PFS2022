import * as rl from 'readline-sync'

const capacidadAmarilla: number = 30
const capacidadVerde: number = 35
const capacidadAzul: number = 40

function elegirSalon(cantAlumnos: number) {
    if (cantAlumnos > 0) {
        if (cantAlumnos <= Math.max(capacidadAmarilla, capacidadVerde, capacidadAzul)) {
            let difAmarilla = capacidadAmarilla - cantAlumnos
            let difVerde = capacidadVerde - cantAlumnos
            let difAzul = capacidadAzul - cantAlumnos
            let diferencias: number[] = []
            if (difAmarilla >= 0) {
                diferencias.push(difAmarilla)
            }
            if (difVerde >= 0) {
                diferencias.push(difVerde)
            }
            if (difAzul >= 0) {
                diferencias.push(difAzul)
            }
            switch (Math.min(...diferencias)) {
                case difAmarilla:
                    return 'la amarilla'
                    break;
                case difVerde:
                    return 'la verde'
                    break;
                case difAzul:
                    return 'la azul'
                    break;
                default:
                    return 'ninguna, los alumnos no caben en ninguna sala'
                    break;
            }
        }
        else {
            return 'ninguna, los alumnos no caben en ninguna sala'
        }
    }
    else {
        return 'ninguna, ya que la cantidad de alumnos debe ser mayor a 0'
    }
    
}

const cantidadAlumnos: number = rl.questionInt('Ingrese la cantidad de alumnos: ')
console.log(`La mejor sala es ${elegirSalon(cantidadAlumnos)}`)