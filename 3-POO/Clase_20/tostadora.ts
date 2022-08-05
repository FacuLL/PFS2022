class tostadora {
    // Variables
    tiempoCoccion: number; // Tiempo en minutos
    potencia: number;
    encendido: boolean;

    temporizador: number;

    // Getters y Setters
    getTiempoCoccion(): number {return this.tiempoCoccion}
    setTiempoCoccion(nuevotiempo: number): void {
        if(nuevotiempo > 0 && nuevotiempo <= 10) {
            this.tiempoCoccion = nuevotiempo;
        }
        else throw "Nuevo tiempo incorrecto";
    }

    getPotencia(): number {return this.potencia}
    setPotencia(nuevapotencia: number): void {
        if(nuevapotencia > 0 && nuevapotencia <= 3) {
            this.tiempoCoccion = nuevapotencia;
        }
        else throw "Potencia incorrecta";
    }

    getEncendido(): boolean {return this.encendido}
    setEncendido(nuevoestado: boolean): void {this.encendido = nuevoestado}
    switchEncendido(): void {this.encendido = !this.encendido}

    // Funciones
    startCoccion(): string {
        this.temporizador = this.tiempoCoccion;
        while(this.temporizador > 0) {
            // Cocina la tostada a potencia establecida por 1 minuto
            this.temporizador--;
        }
        return 'Coccion terminada';
    }

    pararCoccion(): string {
        if(this.temporizador == 0) throw 'No hay una cocción iniciada';
        this.temporizador = 0;
        return 'Se paró la cocción';
    }
}

