import Tostadora from './tostadora'

export default class Tostada {
    // Variables
    private gradoTostado: number = 0;
    private anchoDePan: number = 10;

    // Constructor
    constructor(anchoDePan?: number) {
        if(anchoDePan && anchoDePan > 0) {
            this.anchoDePan = anchoDePan;
        }
    }

    // Getters y Setters
    public getGradoTostado(): number {
        return this.gradoTostado;
    }

    public tostarPan(tostadora: Tostadora, potencia: number): void {
        if(tostadora.getEncendido() && tostadora.getTiempoCoccion() >= 0) {
            this.gradoTostado+=potencia;
        }
    }

    public getAnchoDePan(): number {
        return this.anchoDePan;
    }

}