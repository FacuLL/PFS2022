"use strict";
// Clase de un usuario administrador, capaz de eliminar usuarios y publicaciones.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User_1 = require("./User");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email, phone, birth, password, adminlevel, adminid) {
        var _this = _super.call(this, name, email, phone, birth, password) || this;
        _this.adminlevel = adminlevel;
        if (adminid)
            _this.adminid = adminid;
        return _this;
    }
    Admin.prototype.getAdminId = function () {
        return this.adminid;
    };
    Admin.prototype.setAdminId = function (id) {
        if (!this.adminid)
            this.adminid = id;
    };
    Admin.prototype.getAdminLevel = function () {
        return this.adminlevel;
    };
    Admin.prototype.deleteUser = function (app, userid) {
        app.deleteUser(userid);
    };
    Admin.prototype.deleteUserPublication = function (app, userid, publicationPostition) {
        app.deleteUserPublication(userid, publicationPostition);
    };
    return Admin;
}(User_1["default"]));
exports["default"] = Admin;
