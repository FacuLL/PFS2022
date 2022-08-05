var fs = require("fs");

var texto = fs.readFileSync('texto.txt', 'utf8');

var vocales = "aeiou";

var nuevapalabra = "";

for (let i = 0; i < texto.length; i++) {
    var aux = true;
    for (let j = 0; j < vocales.length; j++) {
        if (aux) {
            if(texto[i].toLowerCase() == vocales[j]) {
                nuevapalabra+="#";
                aux = false;
            }
        }
    }
    if (aux) nuevapalabra+=texto[i]
}

fs.writeFileSync('texto.txt', nuevapalabra.trim());

texto = fs.readFileSync('texto.txt', 'utf8');

console.log('El archivo se modifico a: ' + texto);