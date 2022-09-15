import { ArticuloLectura } from "./ArticuloLectura";

export class Revista extends ArticuloLectura {
    private articulos: string[];

    constructor(ISBN, autor, editorial, titulo, cantidadPaginas) {
        super(ISBN, autor, editorial, titulo);
        if (cantidadPaginas > 0 && cantidadPaginas <= 50) this.cantidadPaginas = cantidadPaginas;
        else throw new Error('La cantidad de paginas de una revista debe ser mayor a 0 y menor a 50');
    }

    setCantidadPaginas(cantidadPaginas: number): boolean {
        if (cantidadPaginas > 0 && cantidadPaginas <= 50) {
            this.cantidadPaginas = cantidadPaginas;
            return true;
        }
        else return false;
    }

    addArticulo(articulo: string): boolean {
        this.articulos.push(articulo);
        return true;
    }

    removeArticulo(posicion: number): boolean {
        if (this.articulos[posicion]) {
            this.articulos.splice(posicion, 1);
            return true;
        }
        else return false;
    }
}