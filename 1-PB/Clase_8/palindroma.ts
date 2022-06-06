// Este programa determina si una palabra es palindroma o no

// Librerias
import * as rl from 'readline-sync';

// Funcion que determina si es palindroma una palabra o no
function isPalidrome(word: string): boolean {
    // Se crea una variable donde se introduce la palabra invertida
    let reversedword: string = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedword += word[i];
    }
    // Si la palabra invertida es igual a la normal, se devuelve true
    if(reversedword == word) return true;
    // Si no, se devuelve false
    else return false;
}

// Se le pide al usuario introducir una palabra
let userword = rl.question('Ingrese la palabra que desee saber si es palindroma: ')
// Se imprime si la palabra es palindroma o no
console.log(isPalidrome(userword) ? "La palabra es palindroma":"La palabra no es palindroma")