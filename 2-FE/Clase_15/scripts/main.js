var gatitos = ["Esteban", "Enrique", "Felipe", "Mario", "Pepe", "Copito", "Julio", "Facundo", "Agnes"];
var nombreactual;
nombreactual = gatitos[Math.floor(Math.random() * gatitos.length)];
document.getElementById('nombregatito').innerHTML = nombreactual;

function gatito() {
   if(confirm('El gato se llama ' +  nombreactual + ", ¿Deseas cambiarlo?")) {
        var nuevonombre = gatitos[Math.floor(Math.random() * gatitos.length)];
        while(nuevonombre == nombreactual) {
            nuevonombre = gatitos[Math.floor(Math.random() * gatitos.length)];
        }
        nombreactual = nuevonombre;
        document.getElementById('nombregatito').innerHTML = nombreactual;
    }
}

function escribir() {
    console.log(document.getElementById("texto").value);
}

var contador = 0;
function contadormas() {
    contador++;
    document.getElementById("textocontador").innerHTML = "Contador: " + contador;
}
function contadormenos() {
    contador--;
    document.getElementById("textocontador").innerHTML = "Contador: " + contador;
}
function dados() {
    var contador = 0;
    for (let i = 0; i < 1000; i++) {
        var tirada = Math.floor(Math.random() * 11 + 2);
        if (tirada == 7) contador++;
    }
    document.getElementById("textodados").innerHTML = "El número 7 salió " + contador + " veces";
}

document.getElementById("texto").addEventListener('input', escribir)
document.getElementById("gatito").addEventListener('click', gatito)
document.getElementById("secreto").addEventListener('click', () => {alert('oña')})
document.getElementById("btContadorMas").addEventListener('click', contadormas)
document.getElementById("btContadorMenos").addEventListener('click', contadormenos)
document.getElementById("btTirarDados").addEventListener('click', dados)