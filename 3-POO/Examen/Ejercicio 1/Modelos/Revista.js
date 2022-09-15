"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Revista = void 0;
var ArticuloLectura_1 = require("./ArticuloLectura");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(ISBN, autor, editorial, titulo, cantidadPaginas) {
        var _this = _super.call(this, ISBN, autor, editorial, titulo) || this;
        if (cantidadPaginas > 0 && cantidadPaginas <= 50)
            _this.cantidadPaginas = cantidadPaginas;
        else
            throw new Error('La cantidad de paginas de una revista debe ser mayor a 0 y menor a 50');
        return _this;
    }
    Revista.prototype.setCantidadPaginas = function (cantidadPaginas) {
        if (cantidadPaginas > 0 && cantidadPaginas <= 50) {
            this.cantidadPaginas = cantidadPaginas;
            return true;
        }
        else
            return false;
    };
    Revista.prototype.addArticulo = function (articulo) {
        this.articulos.push(articulo);
        return true;
    };
    Revista.prototype.removeArticulo = function (posicion) {
        if (this.articulos[posicion]) {
            this.articulos.splice(posicion, 1);
            return true;
        }
        else
            return false;
    };
    return Revista;
}(ArticuloLectura_1.ArticuloLectura));
exports.Revista = Revista;
