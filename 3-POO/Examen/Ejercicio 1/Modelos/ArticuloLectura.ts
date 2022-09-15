export abstract class ArticuloLectura {
    private ISBN: number;
    private autor: string;
    private editorial: string;
    private titulo: string;
    protected cantidadPaginas: number;

    constructor(ISBN, autor, editorial, titulo) {
        if (ISBN > 0) this.ISBN = ISBN;
        else throw new Error('El ISBN debe ser mayor a 0');
        if (autor.replace(" ", "") != "") this.autor = autor;
        else throw new Error('El autor no puede estar vacio');
        if (editorial.replace(" ", "") != "") this.editorial = editorial;
        else throw new Error('La editorial no puede estar vacio');
        if (titulo.replace(" ", "") != "") this.titulo = titulo;
        else throw new Error('El titulo no puede estar vacio');
    }

    public getISBN(): number {
        return this.ISBN;
    }

    public setISBN(ISBN: number): boolean {
        if (ISBN > 0) {
            this.ISBN = ISBN;
            return true;
        }
        else return false;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): boolean {
        if (autor.replace(" ", "") != "") {
            this.autor = autor;
            return true;
        }
        else return false;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(editorial: string): boolean {
        if (editorial.replace(" ", "") != "") {
            this.editorial = editorial;
            return true;
        }
        else return false;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): boolean {
        if (titulo.replace(" ", "") != "") {
            this.titulo = titulo;
            return true;
        }
        else return false;
    }

    public getCantidadPaginas(): number {
        return this.cantidadPaginas;
    }

    abstract setCantidadPaginas(cantidadPaginas: number): boolean;

}

