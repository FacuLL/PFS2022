"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var Bebida_1 = require("./Bebida");
var Interfaz = /** @class */ (function () {
    function Interfaz() {
    }
    Interfaz.prototype.startProgram = function (almacen) {
        console.log(this.printMainMenu(almacen.getNombre()));
        switch (rls.questionInt('Su elección: ')) {
            case 1:
                console.log('Datos de la nueva bebida');
                var marca = rls.question('Marca: ');
                var sabor = rls.question('Sabor: ');
                var precio = rls.questionFloat('Precio: ');
                var stock = rls.questionInt('Stock: ');
                try {
                    var nuevaBebida = new Bebida_1["default"](marca, sabor, precio, stock);
                    almacen.createBebida(nuevaBebida);
                    console.log('Bebida creada con exito');
                }
                catch (e) {
                    this.displayError(e);
                }
                if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                    this.startProgram(almacen);
                break;
            case 2:
                console.log(this.printGetMenu(almacen.getNombre()));
                switch (rls.questionInt('Su elección: ')) {
                    case 1:
                        var id = rls.questionInt('Ingrese posición: ');
                        try {
                            console.log(almacen.imprimirbebidas([almacen.getBebidaById(id)]));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    case 2:
                        var marca_1 = rls.question('Ingrese marca: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByMarca(marca_1)));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    case 3:
                        var sabor_1 = rls.question('Ingrese sabor: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasBySabor(sabor_1)));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    case 4:
                        var precioMin = rls.questionFloat('Ingrese precio mínimo: ');
                        var precioMax = rls.questionFloat('Ingrese precio máximo: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByPrecio(precioMin, precioMax)));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    case 5:
                        var stockMin = rls.questionInt('Ingrese stock mínimo: ');
                        var stockMax = rls.questionInt('Ingrese stock máximo: ');
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidasByStock(stockMin, stockMax)));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    case 6:
                        try {
                            console.log(almacen.imprimirbebidas(almacen.getBebidas()));
                        }
                        catch (e) {
                            this.displayError(e);
                        }
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                    default:
                        console.log('Opción incorrecta');
                        if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                            this.startProgram(almacen);
                        break;
                }
                break;
            case 3:
                var deleteId = rls.questionInt('Ingrese posición a eliminar: ');
                try {
                    almacen.deleteBebidaById(deleteId);
                    console.log('Bebida eliminada con éxito');
                }
                catch (e) {
                    this.displayError(e);
                }
                if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                    this.startProgram(almacen);
                break;
            case 4:
                var updateId = rls.questionInt('Ingrese posición: ');
                try {
                    console.log('Datos de la nueva bebida (dejar vacio para dejar como estaba)');
                    var oldBebida = almacen.getBebidaById(updateId);
                    var newMarca = rls.question('Nueva Marca: ');
                    if (newMarca.replace(" ", "") == "")
                        newMarca = oldBebida.getMarca();
                    var newSabor = rls.question('Nuevo Sabor: ');
                    if (newSabor.replace(" ", "") == "")
                        newSabor = oldBebida.getSabor();
                    var newPrecio = rls.question('Nuevo Precio: ');
                    if (isNaN(parseFloat(newPrecio)))
                        newPrecio = oldBebida.getPrecio().toString();
                    var newStock = rls.question('Nuevo Stock: ');
                    if (isNaN(parseInt(newStock)))
                        newStock = oldBebida.getStock().toString();
                    var newBebida = new Bebida_1["default"](newMarca, newSabor, parseFloat(newPrecio), parseInt(newStock));
                    almacen.updateBebidaById(updateId, newBebida);
                    console.log('Bebida actualizada con éxito');
                }
                catch (e) {
                    this.displayError(e);
                }
                if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                    this.startProgram(almacen);
                break;
            default:
                console.log('Opción incorrecta');
                if (rls.question('Desea hacer otra consulta? ').toLowerCase()[0] == 's')
                    this.startProgram(almacen);
                break;
        }
    };
    Interfaz.prototype.printMainMenu = function (name) {
        return "\n        ___________________________________________\n        |            Almacen de Bebidas            |\n        |              ".concat(name, "\n        | Elija:                                   |\n        | 1. A\u00F1adir bebida                         |\n        | 2. Consultar bebidas                     |\n        | 3. Eliminar bebidas                      |\n        | 4. Editar bebidas                        |\n        ____________________________________________\n        ");
    };
    Interfaz.prototype.printGetMenu = function (name) {
        return "\n        ___________________________________________\n        |            Almacen de Bebidas            |\n        |              ".concat(name, "\n        | Obtener bebidas por:                     |\n        | 1. Posicion (id)                         |\n        | 2. Marca                                 |\n        | 3. Sabor                                 |\n        | 4. Precio                                |\n        | 5. Stock                                 |\n        | 6. Todas                                 |\n        ____________________________________________\n        ");
    };
    Interfaz.prototype.displayError = function (e) {
        console.log("Hubo un ".concat(e.name, ": ").concat(e.message));
    };
    return Interfaz;
}());
exports["default"] = Interfaz;
