import * as rl from 'readline-sync';
import * as chalk from 'chalk';

console.log(chalk.magenta.bgYellowBright("Espera a que el colectivo llegue"))

let llegoColectivo: boolean = false

function esperar() {
    let llego: string = rl.question(chalk.blue("Llego? ")).toLowerCase()
    if (llego == "si" || llego == "s") {
        llegoColectivo = true
    }
}

while (!llegoColectivo) {
    esperar()
}

console.log("Subió al colectivo")

chalk.gray.bgWhite();