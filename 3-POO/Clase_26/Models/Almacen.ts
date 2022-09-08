import Bebida from "./Bebida";
import ErrorControlado from "./ErrorControlado";

export default class Almacen {
    private nombre: string;
    private bebidas: Bebida[] = [];

    constructor(nombre: string, bebidas?: Bebida[]) {
        if (nombre.replace(" ", "") == "") throw new ErrorControlado("El nombre no puede estar vacio");
        this.nombre = nombre;
        if (bebidas) this.bebidas = bebidas;
    }

    // CRUD
    public createBebida(bebida: Bebida): void {
        this.bebidas.push(bebida);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getBebidas(): Bebida[] {
        return this.bebidas;
    }

    public getBebidaById(id: number): Bebida {
        if (id < 0) throw new ErrorControlado("La id no puede ser negativa");
        return this.bebidas[id];
    }

    public getBebidasByMarca(marca: string): Bebida[] {
        if (marca.replace(" ", "") == "") throw new ErrorControlado("La marca no puede estar vacia");
        let bebidas: Bebida[] = [];
        this.bebidas.forEach(mibebida => {
            if(mibebida.getMarca() == marca) bebidas.push(mibebida);
        });
        return bebidas;
    }

    public getBebidasBySabor(sabor: string): Bebida[] {
        if (sabor.replace(" ", "") == "") throw new ErrorControlado("El sabor no puede estar vacio");
        let bebidas: Bebida[] = [];
        this.bebidas.forEach(mibebida => {
            if(mibebida.getSabor() == sabor) bebidas.push(mibebida);
        });
        return bebidas;
    }

    public getBebidasByPrecio(min: number, max: number): Bebida[] {
        if (min > max) throw new ErrorControlado("El mínimo no puede ser mayor al máximo");
        if (min < 0) throw new ErrorControlado("El mínimo no puede ser negativo");
        if (max < 0) throw new ErrorControlado("El máximo no puede ser negativo");
        let bebidas: Bebida[] = [];
        this.bebidas.forEach(mibebida => {
            if(mibebida.getPrecio() >= min && mibebida.getPrecio() <= max) bebidas.push(mibebida);
        });
        return bebidas;
    }

    public getBebidasByStock(min: number, max: number): Bebida[] {
        if (min > max) throw new ErrorControlado("El mínimo no puede ser mayor al máximo");
        if (min < 0) throw new ErrorControlado("El mínimo no puede ser negativo");
        if (max < 0) throw new ErrorControlado("El máximo no puede ser negativo");
        let bebidas: Bebida[] = [];
        this.bebidas.forEach(mibebida => {
            if(mibebida.getStock() >= min && mibebida.getStock() <= max) bebidas.push(mibebida);
        });
        return bebidas;
    }

    public updateBebidaById(id: number, nuevaBebida: Bebida): void {
        if (id < 0) throw new ErrorControlado("El id no puede ser negativo");
        if (!this.bebidas[id]) throw new ErrorControlado("No hay ninguna bebida con ese id");
        this.bebidas[id] = nuevaBebida;
    }

    public deleteBebidaById(id: number): void {
        if (id < 0) throw new ErrorControlado("El id no puede ser negativo");
        if (!this.bebidas[id]) throw new ErrorControlado("No hay ninguna bebida con ese id");
        this.bebidas.splice(id, 1);
    }

    public imprimirbebidas(bebidas: Bebida[]): string {
        let output: string = "";
        bebidas.forEach(bebida => {
            output+=`{
                marca: ${bebida.getMarca()},
                sabor: ${bebida.getSabor()},
                precio: ${bebida.getPrecio()},
                stock: ${bebida.getStock()}
            }\n`;
        })
        return output;
    }

    public exportBebidas(): any[][] {
        let matriz: any[][] = [];
        for (let i = 0; i < this.bebidas.length; i++) {
            matriz[i] = [];
            matriz[i].push(this.bebidas[i].getMarca());
            matriz[i].push(this.bebidas[i].getSabor());
            matriz[i].push(this.bebidas[i].getPrecio());
            matriz[i].push(this.bebidas[i].getStock());
        }
        return matriz;
    }

    public importBebidas(nuevasBebidas: any[][]): void {
        let bebidas: Bebida[] = [];
        for (let i = 0; i < nuevasBebidas.length; i++) {
            bebidas.push(
                new Bebida(
                    nuevasBebidas[i][0],
                    nuevasBebidas[i][1],
                    nuevasBebidas[i][2],
                    nuevasBebidas[i][3]
                )
            );
        }
        if(bebidas.length > 0) this.bebidas = bebidas;
    }
}