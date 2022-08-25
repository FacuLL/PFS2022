"use strict";
// Clase de un usuario comun, capaz de interactuar en la aplicacion, seguiendo otros usuarios o creando publicaciones
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
var BasicUser = /** @class */ (function (_super) {
    __extends(BasicUser, _super);
    function BasicUser(name, email, phone, birth, password, publicaccount, followsids, followersids, profilepic, publications, userid) {
        var _this = _super.call(this, name, email, phone, birth, password) || this;
        _this.followsIds = [];
        _this.followersIds = [];
        _this.publications = []; // Se deberia crear una clase de tipo publicacion.
        _this.publicaccount = false;
        if (publicaccount)
            _this.publicaccount = publicaccount;
        if (followsids)
            _this.followsIds = followsids;
        if (followersids)
            _this.followersIds = followersids;
        if (profilepic)
            _this.profilePic = profilepic;
        if (publications)
            _this.publications = publications;
        if (userid)
            _this.userid = userid;
        return _this;
    }
    // Getters y setters
    BasicUser.prototype.getUserId = function () {
        return this.userid;
    };
    BasicUser.prototype.setUserId = function (id) {
        if (!this.userid)
            this.userid = id;
    };
    BasicUser.prototype.getFollows = function () {
        return this.followsIds;
    };
    BasicUser.prototype.addFollow = function (followid) {
        var index = this.followsIds.indexOf(followid);
        if (index == -1)
            this.followsIds.push(followid);
    };
    BasicUser.prototype.removeFollow = function (followid) {
        var index = this.followsIds.indexOf(followid);
        if (index != -1)
            this.followsIds.splice(index, 1);
    };
    BasicUser.prototype.getFollowers = function () {
        return this.followersIds;
    };
    BasicUser.prototype.addFollowers = function (followid) {
        var index = this.followersIds.indexOf(followid);
        if (index == -1)
            this.followersIds.push(followid);
    };
    BasicUser.prototype.removeFollowers = function (followid) {
        var index = this.followersIds.indexOf(followid);
        if (index != -1)
            this.followersIds.splice(index, 1);
    };
    BasicUser.prototype.changeProfilePic = function (image) {
        var myimage = 'https://.....';
        // Se obtiene la imagen
        this.profilePic = myimage;
    };
    BasicUser.prototype.getProfilePic = function () {
        return this.profilePic;
    };
    BasicUser.prototype.getPublications = function () {
        return this.publications;
    };
    BasicUser.prototype.addPublication = function (caption) {
        this.publications.push(caption);
    };
    BasicUser.prototype.deletePublication = function (position) {
        this.publications.splice(position, 1);
    };
    BasicUser.prototype.getPublicOrPrivate = function () {
        return this.publicaccount;
    };
    return BasicUser;
}(User_1["default"]));
exports["default"] = BasicUser;
