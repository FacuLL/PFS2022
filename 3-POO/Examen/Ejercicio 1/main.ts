import { Biblioteca } from "./Modelos/Biblioteca";
import { Libro } from "./Modelos/Libro";
import { Revista } from "./Modelos/Revista";

try {
    let miBiblioteca = new Biblioteca('Los libros de Marta', 'Colón 533');
    let libro1 = new Libro(1, 'Facundo', 'San Juan', 'Mi libro', 123);
    let libro2 = new Libro(2, 'Nehuen', 'San Juan', 'Mi libro 2', 52);
    let revista1 = new Revista(3, 'Facundo','San Juan', 'Mi revista', 50);
    
    if (miBiblioteca.insertarArticulo(libro1)) console.log('Libro insertado con exito');
    if (miBiblioteca.insertarArticulo(libro2)) console.log('Libro insertado con exito');
    if (miBiblioteca.insertarArticulo(revista1)) console.log('Revista insertada con exito');

    console.log(miBiblioteca.buscarPorAutor('Facundo'));
    console.log(miBiblioteca.buscarArticuloPorISBN(2));

    if (miBiblioteca.eliminarArticulo(2)) console.log('Articulo eliminado con éxito');
    if (!miBiblioteca.modificarPaginas(3, 51)) console.log('No se ha podido modificar la cantidad de paginas del articulo');
}
catch (e) {
    console.log(`Error Controlado: ${e.message}`);
}



