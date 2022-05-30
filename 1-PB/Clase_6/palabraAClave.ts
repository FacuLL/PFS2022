import * as rl from 'readline-sync'

const frase: string = rl.question('Ingrese la frase a transformar: ')
const vocales: string = "aeiou";
const remplazos: string = ".,;:!";

let nuevafrase: string = "";
for(let i = 0; i < frase.length; i++) {
    let auxiliar: boolean = false;
    for (let j = 0; j < vocales.length; j++) {
        if (frase[i].toLowerCase() == vocales[j]) {
            nuevafrase+=remplazos[j]
            auxiliar = true;
        }
    }
    if (!auxiliar) {
        if(frase[i] == frase[i].toUpperCase()) {
            nuevafrase+= frase[i].toLowerCase();
        }
        else {
            nuevafrase+= frase[i].toUpperCase();
        }
    }   
}

console.log(`Su nueva contraseña es ${nuevafrase}`)

