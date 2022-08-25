"use strict";
// Clase de la aplicacion principal o biblioteca de usuarios.
exports.__esModule = true;
var BasicUser_1 = require("./BasicUser");
var Admin_1 = require("./Admin");
var MyApp = /** @class */ (function () {
    function MyApp() {
        this.users = [];
        this.admins = [];
    }
    // Getters y setters
    MyApp.prototype.getAdmins = function () {
        return this.admins;
    };
    MyApp.prototype.createAdmin = function (admin) {
        admin.setAdminId(this.admins.length);
        this.admins.push(admin);
    };
    MyApp.prototype.deleteAdmin = function (adminid) {
        this.admins.splice(adminid, 1);
    };
    MyApp.prototype.getUsers = function () {
        return this.users;
    };
    MyApp.prototype.getUsersNames = function () {
        var names = "";
        this.users.forEach(function (user) {
            names += "".concat(user.getName(), " ");
        });
        return names;
    };
    MyApp.prototype.createUser = function (user) {
        user.setUserId(this.users.length);
        this.users.push(user);
    };
    MyApp.prototype.deleteUser = function (userid) {
        this.users.splice(userid, 1);
    };
    MyApp.prototype.deleteUserPublication = function (userid, publicationPostition) {
        this.users[userid].deletePublication(publicationPostition);
    };
    // Se exporta la matriz de usuarios para ser exportada a la base de datos
    MyApp.prototype.exportUsersForSave = function () {
        var myUsers = new Array(this.users.length);
        for (var i = 0; i < this.users.length; i++) {
            myUsers[i] = new Array(11);
            myUsers[i][0] = this.users[i].getUserId();
            myUsers[i][1] = this.users[i].getName();
            myUsers[i][2] = this.users[i].getEmail();
            myUsers[i][3] = this.users[i].getPhone();
            myUsers[i][4] = this.users[i].getPassword();
            myUsers[i][5] = this.users[i].getBirth();
            myUsers[i][6] = this.users[i].getFollowers().length > 0 ? this.users[i].getFollowers() : "";
            myUsers[i][7] = this.users[i].getFollows().length > 0 ? this.users[i].getFollows() : "";
            myUsers[i][8] = this.users[i].getProfilePic() || "Sin foto";
            myUsers[i][9] = this.users[i].getPublications().length > 0 ? this.users[i].getPublications() : "";
            myUsers[i][10] = this.users[i].getPublicOrPrivate();
        }
        return myUsers;
    };
    // Se exporta la matriz de administradores para ser exportada a la base de datos
    MyApp.prototype.exportAdminsForSave = function () {
        var myAdmins = new Array(this.admins.length);
        for (var i = 0; i < this.admins.length; i++) {
            myAdmins[i] = new Array(7);
            myAdmins[i][0] = this.admins[i].getName();
            myAdmins[i][1] = this.admins[i].getAdminId();
            myAdmins[i][2] = this.admins[i].getEmail();
            myAdmins[i][3] = this.admins[i].getPhone();
            myAdmins[i][4] = this.admins[i].getPassword();
            myAdmins[i][5] = this.admins[i].getBirth();
            myAdmins[i][6] = this.admins[i].getAdminLevel();
        }
        return myAdmins;
    };
    // Se importan nuevos usuarios a partir de una matriz
    MyApp.prototype.importUsers = function (users) {
        var _this = this;
        if (users.length > 0) {
            users.forEach(function (user) {
                var i = user;
                var myUser = new BasicUser_1["default"](i[1], i[2], i[3], new Date(i[5]), i[4], !!i[10], i[7].split(',')[0] != '' ? i[7].split(',') : [], i[6].split(',')[0] != '' ? i[6].split(',') : [], i[8], i[9].split(',')[0] != '' ? i[9].split(',') : [], i[0]);
                _this.users.push(myUser);
            });
        }
    };
    // Se importan nuevos administradores a partir de una matriz
    MyApp.prototype.importAdmins = function (admins) {
        var _this = this;
        if (admins.length > 0) {
            admins.forEach(function (admin) {
                var i = admin;
                var myAdmin = new Admin_1["default"](i[1], i[2], i[3], new Date(i[5]), i[4], i[6], i[0]);
                _this.admins.push(myAdmin);
            });
        }
    };
    return MyApp;
}());
exports["default"] = MyApp;
