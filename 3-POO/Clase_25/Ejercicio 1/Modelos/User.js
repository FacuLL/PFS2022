"use strict";
// Usuario básico que luego heredarán las otras clases
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, phone, birth, password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.password = this.encriptPassword(password);
    }
    // Getters y setters
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getBirth = function () {
        return this.birth;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    // Se comprueba si una contraseña coincide con la del usuario
    User.prototype.logIn = function (password) {
        return this.encriptPassword(password) == this.password;
    };
    // Se simula una encriptacion de una contraseña
    User.prototype.encriptPassword = function (password) {
        // Encripta contraseña
        return password + "encriptacion magica";
    };
    ;
    return User;
}());
exports["default"] = User;
