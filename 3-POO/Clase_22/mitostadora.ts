import Tostadora from './tostadora';
import Tostada from './tostada';

var tostada1: Tostada = new Tostada();
var tostada2: Tostada = new Tostada();

var tostadora: Tostadora = new Tostadora({
    anchoTostadora: 10,
    potencia: 3,
    encendido: true,
    tiempoCoccion: 8
})

tostadora.insertarTostada(tostada1, 1);

tostadora.startCoccion();

setTimeout(() => {
    console.log(tostada1.getGradoTostado());
    tostadora.insertarTostada(tostada2, 2)
}, 2100)

setTimeout(() => {
    console.log(tostada1.getGradoTostado());
    console.log(tostada2.getGradoTostado());
}, 5100)