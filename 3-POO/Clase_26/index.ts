import Almacen from "./Models/Almacen";
import Bebida from "./Models/Bebida";
import Interfaz from "./Models/Interfaz"
import TextManager from "./Models/TextManager"

let miAlmacen = new Almacen('Lo de Norma');
let miInterfaz = new Interfaz();
let miTextManager = new TextManager();

miAlmacen.importBebidas(miTextManager.manageImport(miTextManager.readFile('./Datos/bebidas.txt')));

miInterfaz.startProgram(miAlmacen);


miTextManager.saveFile('./Datos/bebidas.txt', miTextManager.manageExport(miAlmacen.exportBebidas()));
