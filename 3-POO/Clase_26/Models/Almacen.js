"use strict";
exports.__esModule = true;
var Bebida_1 = require("./Bebida");
var ErrorControlado_1 = require("./ErrorControlado");
var Almacen = /** @class */ (function () {
    function Almacen(nombre, bebidas) {
        this.bebidas = [];
        if (nombre.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("El nombre no puede estar vacio");
        this.nombre = nombre;
        if (bebidas)
            this.bebidas = bebidas;
    }
    // CRUD
    Almacen.prototype.createBebida = function (bebida) {
        this.bebidas.push(bebida);
    };
    Almacen.prototype.getNombre = function () {
        return this.nombre;
    };
    Almacen.prototype.getBebidas = function () {
        return this.bebidas;
    };
    Almacen.prototype.getBebidaById = function (id) {
        if (id < 0)
            throw new ErrorControlado_1["default"]("La id no puede ser negativa");
        return this.bebidas[id];
    };
    Almacen.prototype.getBebidasByMarca = function (marca) {
        if (marca.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("La marca no puede estar vacia");
        var bebidas = [];
        this.bebidas.forEach(function (mibebida) {
            if (mibebida.getMarca() == marca)
                bebidas.push(mibebida);
        });
        return bebidas;
    };
    Almacen.prototype.getBebidasBySabor = function (sabor) {
        if (sabor.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("El sabor no puede estar vacio");
        var bebidas = [];
        this.bebidas.forEach(function (mibebida) {
            if (mibebida.getSabor() == sabor)
                bebidas.push(mibebida);
        });
        return bebidas;
    };
    Almacen.prototype.getBebidasByPrecio = function (min, max) {
        if (min > max)
            throw new ErrorControlado_1["default"]("El mínimo no puede ser mayor al máximo");
        if (min < 0)
            throw new ErrorControlado_1["default"]("El mínimo no puede ser negativo");
        if (max < 0)
            throw new ErrorControlado_1["default"]("El máximo no puede ser negativo");
        var bebidas = [];
        this.bebidas.forEach(function (mibebida) {
            if (mibebida.getPrecio() >= min && mibebida.getPrecio() <= max)
                bebidas.push(mibebida);
        });
        return bebidas;
    };
    Almacen.prototype.getBebidasByStock = function (min, max) {
        if (min > max)
            throw new ErrorControlado_1["default"]("El mínimo no puede ser mayor al máximo");
        if (min < 0)
            throw new ErrorControlado_1["default"]("El mínimo no puede ser negativo");
        if (max < 0)
            throw new ErrorControlado_1["default"]("El máximo no puede ser negativo");
        var bebidas = [];
        this.bebidas.forEach(function (mibebida) {
            if (mibebida.getStock() >= min && mibebida.getStock() <= max)
                bebidas.push(mibebida);
        });
        return bebidas;
    };
    Almacen.prototype.updateBebidaById = function (id, nuevaBebida) {
        if (id < 0)
            throw new ErrorControlado_1["default"]("El id no puede ser negativo");
        if (!this.bebidas[id])
            throw new ErrorControlado_1["default"]("No hay ninguna bebida con ese id");
        this.bebidas[id] = nuevaBebida;
    };
    Almacen.prototype.deleteBebidaById = function (id) {
        if (id < 0)
            throw new ErrorControlado_1["default"]("El id no puede ser negativo");
        if (!this.bebidas[id])
            throw new ErrorControlado_1["default"]("No hay ninguna bebida con ese id");
        this.bebidas.splice(id, 1);
    };
    Almacen.prototype.imprimirbebidas = function (bebidas) {
        var output = "";
        bebidas.forEach(function (bebida) {
            output += "{\n                marca: ".concat(bebida.getMarca(), ",\n                sabor: ").concat(bebida.getSabor(), ",\n                precio: ").concat(bebida.getPrecio(), ",\n                stock: ").concat(bebida.getStock(), "\n            }\n");
        });
        return output;
    };
    Almacen.prototype.exportBebidas = function () {
        var matriz = [];
        for (var i = 0; i < this.bebidas.length; i++) {
            matriz[i] = [];
            matriz[i].push(this.bebidas[i].getMarca());
            matriz[i].push(this.bebidas[i].getSabor());
            matriz[i].push(this.bebidas[i].getPrecio());
            matriz[i].push(this.bebidas[i].getStock());
        }
        return matriz;
    };
    Almacen.prototype.importBebidas = function (nuevasBebidas) {
        var bebidas = [];
        for (var i = 0; i < nuevasBebidas.length; i++) {
            bebidas.push(new Bebida_1["default"](nuevasBebidas[i][0], nuevasBebidas[i][1], nuevasBebidas[i][2], nuevasBebidas[i][3]));
        }
        if (bebidas.length > 0)
            this.bebidas = bebidas;
    };
    return Almacen;
}());
exports["default"] = Almacen;
