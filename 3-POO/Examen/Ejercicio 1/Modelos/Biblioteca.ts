import { ArticuloLectura } from "./ArticuloLectura";

export class Biblioteca {
    private nombre: string;
    private domicilio: string;
    private elementos: ArticuloLectura[] = [];

    constructor(nombre, domicilio) {
        if (nombre.replace(" ", "") != "") this.nombre = nombre;
        else throw new Error('El nombre no puede estar vacio');
        if (domicilio.replace(" ", "") != "") this.domicilio = domicilio;
        else throw new Error('El domicilio no puede estar vacio');
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): boolean {
        if (nombre.replace(" ", "") != "") {
            this.nombre = nombre;
            return true;
        }
        else return false;
    }

    public getDomicilio(): string {
        return this.domicilio;
    }

    public setDomicilio(domicilio: string): boolean {
        if (domicilio.replace(" ", "") != "") {
            this.domicilio = domicilio;
            return true;
        }
        else return false;
    }

    public insertarArticulo(articulo: ArticuloLectura): boolean {
        if(this.isIsbnUnic(articulo.getISBN())) {
            this.elementos.push(articulo);
            return true;
        }
        else return false;
    }

    public buscarArticuloPorISBN(ISBN: number): ArticuloLectura {
        for (let i = 0; i < this.elementos.length; i++) {
            if(this.elementos[i].getISBN() == ISBN) return this.elementos[i];
        }
        throw new Error('No existe un articulo con dicho ISBN');
    }

    public modificarPaginas(ISBN: number, nuevaCantidadPaginas: number): boolean {
        for (let i = 0; i < this.elementos.length; i++) {
            if(this.elementos[i].getISBN() == ISBN) return this.elementos[i].setCantidadPaginas(nuevaCantidadPaginas);
        }
        return false;
    }

    public eliminarArticulo(ISBN: number): boolean {
        for (let i = 0; i < this.elementos.length; i++) {
            if(this.elementos[i].getISBN() == ISBN) {
                this.elementos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public buscarPorAutor(autor: string): ArticuloLectura[] {
        let articulos: ArticuloLectura[] = [];
        for (let i = 0; i < this.elementos.length; i++) {
            if(this.elementos[i].getAutor() == autor) articulos.push(this.elementos[i]);
        }
        if (articulos.length > 0) return articulos;
        else throw new Error('No existen articulos de dicho autor');
    }

    private isIsbnUnic(ISBN: number): boolean {
        let unic: boolean = true;
        for (let i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getISBN() == ISBN) unic = false;
        }
        return unic;
    }

}