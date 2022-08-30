import ErrorControlado from "./ErrorControlado";

export default class Bebida {
    private marca: string;
    private sabor: string;
    private precio: number;
    private stock: number;

    constructor(marca: string, sabor: string, precio: number, stock: number) {
        if (marca.replace(" ", "") == "") throw new ErrorControlado("La marca no puede estar vacia");
        this.marca = marca;
        if (sabor.replace(" ", "") == "") throw new ErrorControlado("El sabor no puede estar vacio");
        this.sabor = sabor;
        if (precio < 0) throw new ErrorControlado("El precio no puede ser negativo");
        this.precio = precio;
        if (stock < 0) throw new ErrorControlado("El stock no puede ser negativo");
        this.stock = stock;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        if (marca.replace(" ", "") == "") throw new ErrorControlado("La marca no puede estar vacia");
        this.marca = marca;
    }

    public getSabor(): string {
        return this.sabor;
    }

    public setSabor(sabor: string): void {
        if (sabor.replace(" ", "") == "") throw new ErrorControlado("El sabor no puede estar vacio");
        this.sabor = sabor;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        if (precio < 0) throw new ErrorControlado("El precio no puede ser negativo");
        this.precio = precio;
    }

    public getStock(): number {
        return this.stock;
    }

    public setStock(stock: number): void {
        if (stock < 0) throw new ErrorControlado("El stock no puede ser negativo");
        this.stock = stock;
    }
}