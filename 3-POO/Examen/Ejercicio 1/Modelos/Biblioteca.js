"use strict";
exports.__esModule = true;
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nombre, domicilio) {
        this.elementos = [];
        if (nombre.replace(" ", "") != "")
            this.nombre = nombre;
        else
            throw new Error('El nombre no puede estar vacio');
        if (domicilio.replace(" ", "") != "")
            this.domicilio = domicilio;
        else
            throw new Error('El domicilio no puede estar vacio');
    }
    Biblioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Biblioteca.prototype.setNombre = function (nombre) {
        if (nombre.replace(" ", "") != "") {
            this.nombre = nombre;
            return true;
        }
        else
            return false;
    };
    Biblioteca.prototype.getDomicilio = function () {
        return this.domicilio;
    };
    Biblioteca.prototype.setDomicilio = function (domicilio) {
        if (domicilio.replace(" ", "") != "") {
            this.domicilio = domicilio;
            return true;
        }
        else
            return false;
    };
    Biblioteca.prototype.insertarArticulo = function (articulo) {
        if (this.isIsbnUnic(articulo.getISBN())) {
            this.elementos.push(articulo);
            return true;
        }
        else
            return false;
    };
    Biblioteca.prototype.buscarArticuloPorISBN = function (ISBN) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getISBN() == ISBN)
                return this.elementos[i];
        }
        throw new Error('No existe un articulo con dicho ISBN');
    };
    Biblioteca.prototype.modificarPaginas = function (ISBN, nuevaCantidadPaginas) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getISBN() == ISBN)
                return this.elementos[i].setCantidadPaginas(nuevaCantidadPaginas);
        }
        return false;
    };
    Biblioteca.prototype.eliminarArticulo = function (ISBN) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getISBN() == ISBN) {
                this.elementos.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Biblioteca.prototype.buscarPorAutor = function (autor) {
        var articulos = [];
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getAutor() == autor)
                articulos.push(this.elementos[i]);
        }
        if (articulos.length > 0)
            return articulos;
        else
            throw new Error('No existen articulos de dicho autor');
    };
    Biblioteca.prototype.isIsbnUnic = function (ISBN) {
        var unic = true;
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getISBN() == ISBN)
                unic = false;
        }
        return unic;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
