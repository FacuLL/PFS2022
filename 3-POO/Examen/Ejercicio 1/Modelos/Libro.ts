import { ArticuloLectura } from "./ArticuloLectura";

export class Libro extends ArticuloLectura {
    constructor(ISBN, autor, editorial, titulo, cantidadPaginas) {
        super(ISBN, autor, editorial, titulo);
        if (cantidadPaginas > 0) this.cantidadPaginas = cantidadPaginas;
        else throw new Error('La cantidad de paginas debe ser mayor a 0');
    }

    setCantidadPaginas(cantidadPaginas: number): boolean {
        if (cantidadPaginas > 0) {
            this.cantidadPaginas = cantidadPaginas;
            return true;
        }
        else return false;
    }
}

