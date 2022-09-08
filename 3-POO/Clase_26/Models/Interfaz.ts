import * as rls from "readline-sync";
import Almacen from "./Almacen";
import Bebida from "./Bebida";
import ErrorControlado from "./ErrorControlado";

export default class Interfaz {
    constructor() {}

    public startProgram(almacen: Almacen) {
        console.log(this.printMainMenu(almacen.getNombre()));
        switch (rls.questionInt('Su elección: ')) {
            case 1:
                console.log('Datos de la nueva bebida');
                let marca: string = rls.question('Marca: ');
                let sabor: string = rls.question('Sabor: ');
                let precio: number = rls.questionFloat('Precio: ');
                let stock: number = rls.questionInt('Stock: ');
                try {
                    let nuevaBebida: Bebida = new Bebida(marca, sabor, precio, stock);
                    almacen.createBebida(nuevaBebida);
                    console.log('Bebida creada con exito');
                }
                catch(e) {
                    this.displayError(e)
                }
                if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                break;
            case 2:
                console.log(this.printGetMenu(almacen.getNombre()));
                switch (rls.questionInt('Su elección: ')) {
                    case 1:
                        let id: number = rls.questionInt('Ingrese posición: ');
                        try {
                            console.log(almacen.imprimirbebidas([almacen.getBebidaById(id)]));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                    case 2:
                        let marca: string = rls.question('Ingrese marca: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByMarca(marca)));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                    case 3:
                        let sabor: string = rls.question('Ingrese sabor: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasBySabor(sabor)));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                    case 4:
                        let precioMin: number = rls.questionFloat('Ingrese precio mínimo: ');
                        let precioMax: number = rls.questionFloat('Ingrese precio máximo: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByPrecio(precioMin, precioMax)));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                    case 5:
                        let stockMin: number = rls.questionInt('Ingrese stock mínimo: ');
                        let stockMax: number = rls.questionInt('Ingrese stock máximo: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByStock(stockMin, stockMax)));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                    case 6:
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidas()));
                        }
                        catch(e) {
                            this.displayError(e);
                        }
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen);
                        break;      
                    default:
                        console.log('Opción incorrecta');
                        if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                        break;
                }
                break;
            case 3:
                let deleteId: number = rls.questionInt('Ingrese posición a eliminar: ');
                try {
                    almacen.deleteBebidaById(deleteId);
                    console.log('Bebida eliminada con éxito');
                }
                catch(e) {
                    this.displayError(e);
                }
                if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                break;
            case 4:
                let updateId: number = rls.questionInt('Ingrese posición: ');
                try {
                    console.log('Datos de la nueva bebida (dejar vacio para dejar como estaba)');
                    let oldBebida: Bebida = almacen.getBebidaById(updateId);
                    let newMarca: string = rls.question('Nueva Marca: ');
                    if (newMarca.replace(" ", "") == "") newMarca = oldBebida.getMarca();
                    let newSabor: string = rls.question('Nuevo Sabor: ');
                    if (newSabor.replace(" ", "") == "") newSabor = oldBebida.getSabor();
                    let newPrecio: string = rls.question('Nuevo Precio: ');
                    if (isNaN(parseFloat(newPrecio))) newPrecio = oldBebida.getPrecio().toString();
                    let newStock: string = rls.question('Nuevo Stock: ');
                    if (isNaN(parseInt(newStock))) newStock = oldBebida.getStock().toString();
                    let newBebida: Bebida = new Bebida(newMarca, newSabor, parseFloat(newPrecio), parseInt(newStock));
                    almacen.updateBebidaById(updateId, newBebida);
                    console.log('Bebida actualizada con éxito');
                }
                catch(e) {
                    this.displayError(e);
                }
                if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                break;
            default:
                console.log('Opción incorrecta');
                if(rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's') this.startProgram(almacen); 
                break;
        }
    }

    private printMainMenu(name: string): string {
        return `
        ___________________________________________
        |            Almacen de Bebidas            |
        |              ${name}                     
        | Elija:                                   |
        | 1. Añadir bebida                         |
        | 2. Consultar bebidas                     |
        | 3. Eliminar bebidas                      |
        | 4. Editar bebidas                        |
        ____________________________________________
        `;
    }

    private printGetMenu(name: string): string {
        return `
        ___________________________________________
        |            Almacen de Bebidas            |
        |              ${name}
        | Obtener bebidas por:                     |
        | 1. Posicion (id)                         |
        | 2. Marca                                 |
        | 3. Sabor                                 |
        | 4. Precio                                |
        | 5. Stock                                 |
        | 6. Todas                                 |
        ____________________________________________
        `
    }

    private displayError(e: ErrorControlado): void {
        console.log(`Hubo un ${e.name}: ${e.message}`);
    }
}