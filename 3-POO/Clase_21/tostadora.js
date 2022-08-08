"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var tostadora = /** @class */ (function () {
    // Constructor
    function tostadora(options) {
        // Variables
        this.tiempoCoccion = 1; // Tiempo en segundos
        this.potencia = 1;
        this.encendido = false;
        this.temporizador = 0;
        if (options) {
            if (options.tiempoCoccion) {
                if (options.tiempoCoccion > 0 && options.tiempoCoccion <= 60) {
                    this.tiempoCoccion = options.tiempoCoccion;
                }
            }
            ;
            if (options.potencia) {
                if (options.potencia > 0 && options.potencia <= 3) {
                    this.potencia = options.potencia;
                }
            }
            ;
            if (options.encendido) {
                this.encendido = options.encendido;
            }
        }
    }
    // Getters y Setters
    tostadora.prototype.getTiempoCoccion = function () { return this.tiempoCoccion; };
    tostadora.prototype.setTiempoCoccion = function (nuevotiempo) {
        if (nuevotiempo > 0 && nuevotiempo <= 60) {
            this.tiempoCoccion = nuevotiempo;
        }
        else
            throw "Nuevo tiempo incorrecto";
    };
    tostadora.prototype.getPotencia = function () { return this.potencia; };
    tostadora.prototype.setPotencia = function (nuevapotencia) {
        if (nuevapotencia > 0 && nuevapotencia <= 3) {
            this.tiempoCoccion = nuevapotencia;
        }
        else
            throw "Potencia incorrecta";
    };
    tostadora.prototype.getEncendido = function () { return this.encendido; };
    tostadora.prototype.setEncendido = function (nuevoestado) { this.encendido = nuevoestado; };
    tostadora.prototype.switchEncendido = function () { this.encendido = !this.encendido; };
    // Funciones
    tostadora.prototype.startCoccion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.temporizador != 0)
                            throw 'Ya hay una cocción';
                        console.log('Se inició una cocción');
                        this.temporizador = this.tiempoCoccion;
                        return [4 /*yield*/, this.cocinarTostada().then(function (res) {
                                console.log(res);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tostadora.prototype.cocinarTostada = function () {
        var _this = this;
        return new Promise(function (res, err) {
            var intervalo = setInterval(function () {
                _this.temporizador--;
                if (_this.temporizador == 0) {
                    res("La tostada se cocin\u00F3 por ".concat(_this.getTiempoCoccion(), " segundos a una potencia de ").concat(_this.getPotencia()));
                    clearInterval(intervalo);
                }
            }, 1000);
        });
    };
    tostadora.prototype.pararCoccion = function () {
        if (this.temporizador == 0)
            throw 'No hay una cocción iniciada';
        var tiempo = this.temporizador;
        this.temporizador = 0;
        return 'Se paró la cocción en los ' + tiempo + ' segundos';
    };
    tostadora.prototype.getActualCoccion = function () {
        return this.temporizador;
    };
    return tostadora;
}());
var miTostadora = new tostadora({
    tiempoCoccion: 15,
    encendido: true
});
console.log("La tostadora esta en estado encendido?: ".concat(miTostadora.getEncendido()));
miTostadora.startCoccion();
setTimeout(function () { console.log('La coccion actual lleva ' + miTostadora.getActualCoccion() + ' segundos'); }, 3100);
try {
    miTostadora.setPotencia(5);
}
catch (e) {
    console.log(e);
}
