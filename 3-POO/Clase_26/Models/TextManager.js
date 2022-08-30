"use strict";
// Clase capaz de manejar datos y modificar su formato para asi guardarlos en archivos de texto.
exports.__esModule = true;
var fs = require("fs");
var TextManager = /** @class */ (function () {
    function TextManager(dataSplitter, lineSplitter) {
        this.dataSplitter = ";"; // Caracter utilizado como separador de datos dentro de una linea
        this.lineSplitter = "\n"; // Caracter utilizado como separador de lineas
        if (dataSplitter)
            this.dataSplitter = dataSplitter;
        if (lineSplitter)
            this.lineSplitter = lineSplitter;
    }
    // Modifica el formato de una matriz para poder ser guardada en un archivo de texto
    TextManager.prototype.manageExport = function (data) {
        var newdata = "";
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                newdata += "".concat(data[i][j]).concat(this.dataSplitter);
            }
            newdata += this.lineSplitter;
        }
        return newdata;
    };
    // Modifica el formato de una string y lo convierte en una matriz
    TextManager.prototype.manageImport = function (data) {
        var lines = data.split(this.lineSplitter);
        var newdata = new Array(lines.length);
        for (var i = 0; i < lines.length; i++) {
            var eachdata = lines[i].split(this.dataSplitter);
            newdata[i] = new Array(eachdata.length);
            for (var j = 0; j < eachdata.length; j++) {
                newdata[i][j] = eachdata[j];
            }
        }
        if (newdata[0][0] != '')
            return newdata;
        else
            return [];
    };
    // Guarda una string en un archivo de texto
    TextManager.prototype.saveFile = function (file, data) {
        fs.writeFileSync(file, data.trim());
    };
    // Lee un archivo de texto, devolviendo una string de su contenido
    TextManager.prototype.readFile = function (file) {
        return fs.readFileSync(file, 'utf8');
    };
    return TextManager;
}());
exports["default"] = TextManager;
