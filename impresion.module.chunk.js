webpackJsonp(["impresion.module"],{

/***/ "../../../../../src/app/layout/impresion/impresion-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpresionRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impresion_component__ = __webpack_require__("../../../../../src/app/layout/impresion/impresion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__impresion_component__["a" /* ImpresionComponent */] }
];
var ImpresionRouting = (function () {
    function ImpresionRouting() {
    }
    return ImpresionRouting;
}());
ImpresionRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ImpresionRouting);

//# sourceMappingURL=impresion-routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/impresion/impresion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/impresion/impresion.component.html":
/***/ (function(module, exports) {

module.exports = "<app-credencial [personEnrol] = \"credInfo\" ></app-credencial>\n"

/***/ }),

/***/ "../../../../../src/app/layout/impresion/impresion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpresionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_presto_service__ = __webpack_require__("../../../../../src/app/common/presto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImpresionComponent = (function () {
    function ImpresionComponent(_prestoService) {
        this._prestoService = _prestoService;
    }
    ImpresionComponent.prototype.ngOnDestroy = function () {
        this.impresionSub.unsubscribe();
    };
    ImpresionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.impresionSub = this._prestoService.impresion$.subscribe(function (value) {
            var empresaCred = value.empresa.find(function (item) {
                return item._id == value.empresaCredId;
            });
            _this.credInfo = {
                nombre: value.nombre,
                apellidoPaterno: value.apellidoPaterno,
                rfc: value.rfc,
                qrCode: value.getQRValue(),
                ocupacion: empresaCred.ocupacion,
                nombreEmpresa: empresaCred.nombreEmpresa,
                imgName: value.image
            };
        });
    };
    return ImpresionComponent;
}());
ImpresionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-impresion',
        template: __webpack_require__("../../../../../src/app/layout/impresion/impresion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/impresion/impresion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_presto_service__["a" /* PrestoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_presto_service__["a" /* PrestoService */]) === "function" && _a || Object])
], ImpresionComponent);

var _a;
//# sourceMappingURL=impresion.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/impresion/impresion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpresionModule", function() { return ImpresionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impresion_routing__ = __webpack_require__("../../../../../src/app/layout/impresion/impresion-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__impresion_component__ = __webpack_require__("../../../../../src/app/layout/impresion/impresion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credencial_credencial_module__ = __webpack_require__("../../../../../src/app/layout/credencial/credencial.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImpresionModule = (function () {
    function ImpresionModule() {
    }
    return ImpresionModule;
}());
ImpresionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__impresion_routing__["a" /* ImpresionRouting */],
            __WEBPACK_IMPORTED_MODULE_4__credencial_credencial_module__["a" /* CredencialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__impresion_component__["a" /* ImpresionComponent */]]
    })
], ImpresionModule);

//# sourceMappingURL=impresion.module.js.map

/***/ })

});
//# sourceMappingURL=impresion.module.chunk.js.map