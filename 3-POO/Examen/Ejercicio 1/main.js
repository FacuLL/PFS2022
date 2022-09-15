"use strict";
exports.__esModule = true;
var Biblioteca_1 = require("./Modelos/Biblioteca");
var Libro_1 = require("./Modelos/Libro");
var Revista_1 = require("./Modelos/Revista");
try {
    var miBiblioteca = new Biblioteca_1.Biblioteca('Los libros de Marta', 'Colón 533');
    var libro1 = new Libro_1.Libro(1, 'Facundo', 'San Juan', 'Mi libro', 123);
    var libro2 = new Libro_1.Libro(2, 'Nehuen', 'San Juan', 'Mi libro 2', 52);
    var revista1 = new Revista_1.Revista(3, 'Facundo', 'San Juan', 'Mi revista', 50);
    if (miBiblioteca.insertarArticulo(libro1))
        console.log('Libro insertado con exito');
    if (miBiblioteca.insertarArticulo(libro2))
        console.log('Libro insertado con exito');
    if (miBiblioteca.insertarArticulo(revista1))
        console.log('Revista insertada con exito');
    console.log(miBiblioteca.buscarPorAutor('Facundo'));
    console.log(miBiblioteca.buscarArticuloPorISBN(2));
    if (miBiblioteca.eliminarArticulo(2))
        console.log('Articulo eliminado con éxito');
    if (!miBiblioteca.modificarPaginas(3, 51))
        console.log('No se ha podido modificar la cantidad de paginas del articulo');
}
catch (e) {
    console.log("Error Controlado: ".concat(e.message));
}
