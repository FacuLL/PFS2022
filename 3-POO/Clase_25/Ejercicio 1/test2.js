"use strict";
// Prueba donde solo se importan usuarios de la base de datos y se obtienen sus caracteristicas
exports.__esModule = true;
var miApp_1 = require("./Modelos/miApp");
var TextManager_1 = require("./Modelos/TextManager");
var miApp = new miApp_1["default"]();
var manager = new TextManager_1["default"]();
miApp.importUsers(manager.manageImport(manager.readFile('./Datos/users.txt')));
miApp.importAdmins(manager.manageImport(manager.readFile('./Datos/admins.txt')));
console.log(miApp.getUsers()[0].getPublications());
console.log(miApp.getUsers()[0].getFollowers());
