type tostadoraOptions = {
    tiempoCoccion?: number,
    potencia?: number,
    encendido?: boolean
}

class Tostadora {
    // Variables
    private tiempoCoccion: number = 1; // Tiempo en segundos
    private potencia: number = 1;
    private encendido: boolean = false;

    private temporizador: number = 0;

    // Constructor
    constructor(options?: tostadoraOptions) {
        if (options) {
            if (options.tiempoCoccion) {
                if (options.tiempoCoccion > 0 && options.tiempoCoccion <= 60) {
                    this.tiempoCoccion = options.tiempoCoccion;
                }
            };
            if (options.potencia) {
                if (options.potencia > 0 && options.potencia <= 3) {
                    this.potencia = options.potencia;
                }
            };
            if (options.encendido) {
                this.encendido = options.encendido;
            }
        }
    }

    // Getters y Setters
    public getTiempoCoccion(): number {return this.tiempoCoccion}
    public setTiempoCoccion(nuevotiempo: number): void {
        if(nuevotiempo > 0 && nuevotiempo <= 60) {
            this.tiempoCoccion = nuevotiempo;
        }
        else throw "Nuevo tiempo incorrecto";
    }

    public getPotencia(): number {return this.potencia}
    public setPotencia(nuevapotencia: number): void {
        if(nuevapotencia > 0 && nuevapotencia <= 3) {
            this.tiempoCoccion = nuevapotencia;
        }
        else throw "Potencia incorrecta";
    }

    public getEncendido(): boolean {return this.encendido}
    public setEncendido(nuevoestado: boolean): void {this.encendido = nuevoestado}
    public switchEncendido(): void {this.encendido = !this.encendido}

    // Funciones
    public async startCoccion() {
        if(this.temporizador != 0) throw 'Ya hay una cocción';
        console.log('Se inició una cocción');
        this.temporizador = this.tiempoCoccion;
        await this.cocinarTostada().then(res => {
            console.log(res);
        });
    }

    private cocinarTostada() {
        return new Promise<string>((res, err) => {
            var intervalo = setInterval(() => {
              this.temporizador--;
              if(this.temporizador == 0) {
                res(`La tostada se cocinó por ${this.getTiempoCoccion()} segundos a una potencia de ${this.getPotencia()}`);
                clearInterval(intervalo);
              }
            }, 1000);
          });
    }

    public pararCoccion(): string {
        if(this.temporizador == 0) throw 'No hay una cocción iniciada';
        var tiempo = this.temporizador;
        this.temporizador = 0;
        return 'Se paró la cocción en los ' + tiempo + ' segundos';
    }

    public getActualCoccion(): number {
        return this.temporizador;
    }

}

var miTostadora = new Tostadora({
    tiempoCoccion: 15,
    encendido: true
});

console.log(`La tostadora esta en estado encendido?: ${miTostadora.getEncendido()}`);

miTostadora.startCoccion();

setTimeout(() => {console.log('La coccion actual lleva ' + miTostadora.getActualCoccion() + ' segundos')}, 3100);

try {
    miTostadora.setPotencia(5)
}
catch(e) {
    console.log(e);
}





