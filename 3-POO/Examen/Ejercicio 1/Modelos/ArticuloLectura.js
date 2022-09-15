"use strict";
exports.__esModule = true;
exports.ArticuloLectura = void 0;
var ArticuloLectura = /** @class */ (function () {
    function ArticuloLectura(ISBN, autor, editorial, titulo) {
        if (ISBN > 0)
            this.ISBN = ISBN;
        else
            throw new Error('El ISBN debe ser mayor a 0');
        if (autor.replace(" ", "") != "")
            this.autor = autor;
        else
            throw new Error('El autor no puede estar vacio');
        if (editorial.replace(" ", "") != "")
            this.editorial = editorial;
        else
            throw new Error('La editorial no puede estar vacio');
        if (titulo.replace(" ", "") != "")
            this.titulo = titulo;
        else
            throw new Error('El titulo no puede estar vacio');
    }
    ArticuloLectura.prototype.getISBN = function () {
        return this.ISBN;
    };
    ArticuloLectura.prototype.setISBN = function (ISBN) {
        if (ISBN > 0) {
            this.ISBN = ISBN;
            return true;
        }
        else
            return false;
    };
    ArticuloLectura.prototype.getAutor = function () {
        return this.autor;
    };
    ArticuloLectura.prototype.setAutor = function (autor) {
        if (autor.replace(" ", "") != "") {
            this.autor = autor;
            return true;
        }
        else
            return false;
    };
    ArticuloLectura.prototype.getEditorial = function () {
        return this.editorial;
    };
    ArticuloLectura.prototype.setEditorial = function (editorial) {
        if (editorial.replace(" ", "") != "") {
            this.editorial = editorial;
            return true;
        }
        else
            return false;
    };
    ArticuloLectura.prototype.getTitulo = function () {
        return this.titulo;
    };
    ArticuloLectura.prototype.setTitulo = function (titulo) {
        if (titulo.replace(" ", "") != "") {
            this.titulo = titulo;
            return true;
        }
        else
            return false;
    };
    ArticuloLectura.prototype.getCantidadPaginas = function () {
        return this.cantidadPaginas;
    };
    return ArticuloLectura;
}());
exports.ArticuloLectura = ArticuloLectura;
