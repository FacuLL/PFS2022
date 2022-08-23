import Tostada from './tostada';

type tostadoraOptions = {
    tiempoCoccion?: number,
    potencia?: number,
    encendido?: boolean,
    anchoTostadora?: number,
    tostadas?: Tostada[]
}

export default class Tostadora {
    // Variables
    private tiempoCoccion: number = 1; // Tiempo en segundos
    private potencia: number = 1;
    private encendido: boolean = false;
    private anchoTostadora: number = 10;

    private tostadasInsertadas: Tostada[] = new Array(2);

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
            if (options.anchoTostadora && options.anchoTostadora > 0) {
                this.anchoTostadora = options.anchoTostadora;
            }
            if (options.tostadas) {
                if(options.tostadas[0] && options.tostadas[0].getAnchoDePan() <= this.anchoTostadora) {
                    this.tostadasInsertadas[0] = options.tostadas[0];
                }
                if(options.tostadas[1] && options.tostadas[1].getAnchoDePan() <= this.anchoTostadora) {
                    this.tostadasInsertadas[1] = options.tostadas[1];
                }
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
        await this.cocinarTostadas().then(res => {
            console.log(res);
        });
    }

    private cocinarTostadas() {
        return new Promise<string>((res, err) => {
            var intervalo = setInterval(() => {
              this.temporizador--;
              if(this.tostadasInsertadas[0]) {
                this.tostadasInsertadas[0].tostarPan(this, this.potencia);
              }
              if(this.tostadasInsertadas[1]) {
                this.tostadasInsertadas[1].tostarPan(this, this.potencia);
              }
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

    public insertarTostada(tostada: Tostada, ranura: number): void {
        if(ranura > 0 && ranura <= 2) {
            if(this.tostadasInsertadas[ranura - 1]) {
                throw 'Ranura ocupada'
            }
            else {
                if(tostada.getAnchoDePan() <= this.anchoTostadora) {
                    this.tostadasInsertadas[ranura - 1] = tostada;
                }
                else throw 'Tostada muy grande';
            }
        }
        else {
            throw 'Ranura invalida (solo 1 o 2)'
        }
    }

    public sacarTostada(ranura: number) {
        if(ranura > 0 && ranura <= 2) {
            if(this.tostadasInsertadas[ranura - 1]) {
                delete this.tostadasInsertadas[ranura - 1];
            }
        }
        else {
            throw 'Ranura invalida (solo 1 o 2)'
        }
    }

    getGradoTostado(ranura: number): number {
        if(ranura > 0 && ranura <= 2) {
            if(this.tostadasInsertadas[ranura - 1]) {
                return this.tostadasInsertadas[ranura - 1].getGradoTostado();
            }
            else throw 'No hay tostada en la ranura seleccionada';
        }
        else {
            throw 'Ranura invalida (solo 1 o 2)';
        }
    }
}