"use strict";
exports.__esModule = true;
var ErrorControlado_1 = require("./ErrorControlado");
var Bebida = /** @class */ (function () {
    function Bebida(marca, sabor, precio, stock) {
        if (marca.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("La marca no puede estar vacia");
        this.marca = marca;
        if (sabor.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("El sabor no puede estar vacio");
        this.sabor = sabor;
        if (precio < 0)
            throw new ErrorControlado_1["default"]("El precio no puede ser negativo");
        this.precio = precio;
        if (stock < 0)
            throw new ErrorControlado_1["default"]("El stock no puede ser negativo");
        this.stock = stock;
    }
    Bebida.prototype.getMarca = function () {
        return this.marca;
    };
    Bebida.prototype.setMarca = function (marca) {
        if (marca.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("La marca no puede estar vacia");
        this.marca = marca;
    };
    Bebida.prototype.getSabor = function () {
        return this.sabor;
    };
    Bebida.prototype.setSabor = function (sabor) {
        if (sabor.replace(" ", "") == "")
            throw new ErrorControlado_1["default"]("El sabor no puede estar vacio");
        this.sabor = sabor;
    };
    Bebida.prototype.getPrecio = function () {
        return this.precio;
    };
    Bebida.prototype.setPrecio = function (precio) {
        if (precio < 0)
            throw new ErrorControlado_1["default"]("El precio no puede ser negativo");
        this.precio = precio;
    };
    Bebida.prototype.getStock = function () {
        return this.stock;
    };
    Bebida.prototype.setStock = function (stock) {
        if (stock < 0)
            throw new ErrorControlado_1["default"]("El stock no puede ser negativo");
        this.stock = stock;
    };
    return Bebida;
}());
exports["default"] = Bebida;
