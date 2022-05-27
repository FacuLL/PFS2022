import * as rl from 'readline-sync'

function toCamelCase(text: String):string {
    let array: String[] = text.split(" ")
    let newArray: String[] = new Array(array.length)
    newArray[0] = array[0]
    for (let i = 1; i < array.length; i++) {
        let palabra: String = array[i][0].toUpperCase()
        for (let j = 1; j < array[i].length; j++) {
            palabra += array[i][j]
        }
        newArray[i] = palabra
    }
    return newArray.join("")
}

const frase: string = rl.question('Ingrese la frase a transformar:')

console.log(toCamelCase(frase))