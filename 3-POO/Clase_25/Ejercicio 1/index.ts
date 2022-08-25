// Prueba de la aplicacion donde se importan los usuarios, se crean dos nuevos y se guarda nuevamente.

import BasicUser from "./Modelos/BasicUser";
import Admin from "./Modelos/Admin";
import MyApp from "./Modelos/miApp";
import TextManager from "./Modelos/TextManager"

let miApp = new MyApp();

let manager = new TextManager();

miApp.importUsers(manager.manageImport(manager.readFile('./Datos/users.txt')));
miApp.importAdmins(manager.manageImport(manager.readFile('./Datos/admins.txt')));

console.log(miApp.getUsersNames());

let admin1 = new Admin('Enrique', 'prueba@hola.com', '142387421', new Date(), 'prueba', 2);

let usuario1 = new BasicUser('Felipe', 'prueba@hola.com', '142387421', new Date(), 'hola', true);

let usuario2 = new BasicUser('Pepe', 'prueba@hola.com', '1423234', new Date(), 'hola2', false);

miApp.createUser(usuario1);
miApp.createUser(usuario2);
miApp.createAdmin(admin1);

console.log(miApp.getUsersNames());

usuario1.addPublication('Hola como estan?');
usuario1.addPublication('Holaaaa');
usuario1.addPublication('Publicacion 3');
usuario1.addPublication('Enrique el mejor admin');
console.log(usuario1.getPublications());



manager.saveFile('./Datos/users.txt', manager.manageExport(miApp.exportUsersForSave()));
manager.saveFile('./Datos/admins.txt', manager.manageExport(miApp.exportAdminsForSave()));


