// Prueba donde solo se importan usuarios de la base de datos y se obtienen sus caracteristicas

import BasicUser from "./Modelos/BasicUser";
import Admin from "./Modelos/Admin";
import MyApp from "./Modelos/miApp";
import TextManager from "./Modelos/TextManager"

let miApp = new MyApp();

let manager = new TextManager();

miApp.importUsers(manager.manageImport(manager.readFile('./Datos/users.txt')));
miApp.importAdmins(manager.manageImport(manager.readFile('./Datos/admins.txt')));

console.log(miApp.getUsers()[0].getPublications());
console.log(miApp.getUsers()[0].getFollowers());