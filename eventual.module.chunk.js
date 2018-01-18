webpackJsonp(["eventual.module"],{

/***/ "../../../../../src/app/layout/eventual/eventual-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventualRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventual_component__ = __webpack_require__("../../../../../src/app/layout/eventual/eventual.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__eventual_component__["a" /* EventualComponent */] }
];
var EventualRouting = (function () {
    function EventualRouting() {
    }
    return EventualRouting;
}());
EventualRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], EventualRouting);

//# sourceMappingURL=eventual-routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/eventual/eventual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content-borders {\n\tborder-bottom: 1px solid #ccc;\n\tborder-left: 1px solid #ccc;\n\tborder-right: 1px solid #ccc;\n\tfloat: left;\n\twidth: 100%;\n}\n\n.containerCred {\n\tbackground-color: white;\n\tborder-radius: 20px;\n\tbox-shadow: 10px 10px 10px;\n\twidth: 450px;\n\theight: 300px;\n\toverflow: hidden;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 2px solid #ccc;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/eventualesBck.jpg") + ");\n\tbackground-size: 200% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\toverflow: hidden;\n}\n\n.header {\n\theight: 20px;\n\twidth: 450px;\n\tborder-top-right-radius: 20px;\n\tborder-top-left-radius: 20px;\n}\n\n.mainbody {\n\ttop: 27px;\n\twidth: 450px;\n}\n\n.mainbody > img {\n\t/*margin-left: auto;*/\n\tposition: relative;\n\tfloat: left;\n\ttop: 50px;\n\tleft: 35px;\n\tmargin-right: auto;\n\twidth: 100px;\n\theight: 150px;\n\tdisplay: block;\n\tvertical-align: middle;\n\tbackground-size: 135% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/customer-512.png") + ");\n}\n\n.tableDatos {\n\tposition: relative;\n\ttop: 30px;\n\tleft: 50px;\n\ttext-align: center;\n\twidth: 285px;\n}\n\n.trSeparador > td > hr {\n\tmargin: 0px !important;\n\tborder-top: 2px solid black;\n}\n\n.eventualTitle {\n\tcolor: #ACCAE9;\n\tfont-size: 87px;\n\tposition: relative;\n\twidth: 450px;\n\ttop: -51px;\n}\n\n.eventualTitleDos {\n\tfont-size: 35px;\n\tposition: relative;\n\ttop: -119px;\n\tleft: 6px;\n\tcolor: #2E5E91;\n}\n\nvideo {\n\twidth: 100%;\n\tborder-radius: 20px;\n}\n\n#photoCanvas {\n\tdisplay: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/eventual/eventual.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"mainEnrolamiento\">\n\n\t<form #formEventuales class=\"form-horizontal\" [formGroup]=\"eventualForm\" [ngBusy]=\"uploadBusy\">\n\t\t<div id=\"accordionEnrolamiento\">\n\n\t\t\t<div class=\"panel panel-primary panel-primaryC panelC\">\n\t\t\t\t<div class=\"panel-heading \">\n\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"glyphicon glyphicon-transfer\"></i>&nbsp;&nbsp;&nbsp;Registro de Acceso Eventual</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body panel-collapse in\" id=\"collapseInactivo\">\n\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div [style.display]=\" isStreaming ? 'block' : 'none' \" class=\"center-block\" style=\"width: 480px;\">\n\t\t\t\t\t\t\t<video #hardwareVideo id=\"hardwareVideo\" autoplay></video>\n\t\t\t\t\t\t\t<canvas #photoCanvas id=\"photoCanvas\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"divImpresion\">\n\t\t\t\t\t\t\t<div class=\"containerCred\" [style.display]=\" !isStreaming ? 'block' : 'none' \">\n\t\t\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t\t\t<div class=\"eventualTitle\">EVENTUAL</div>\n\t\t\t\t\t\t\t\t\t<div class=\"eventualTitleDos\">EVENTUAL</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mainbody\">\n\t\t\t\t\t\t\t\t\t<img #imgEventual src=\"assets/s.gif\">\n\t\t\t\t\t\t\t\t\t<table class=\"tableDatos\">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><h2>{{eventualForm.value['nombre'].toUpperCase() +' ' + eventualForm.value['apellidoPaterno'].toUpperCase()}}</h2></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"trSeparador\">\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><h3>{{eventualForm.value['razonSocial'].toUpperCase()}}</h3></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><h4>{{eventualForm.value['ocupacion'].toUpperCase()}}</h4></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"center-block\" *ngIf=\"isStreaming\" style=\"margin-bottom: 15px;width: 245px;\">\n\t\t\t\t\t\t\t<button (click)=\"tomarFoto()\" class=\"btn btn-sm btn-success\" style=\"margin-right: 10px\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\"></span> Captuar Foto\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button (click)=\"stopStream()\" class=\"btn btn-sm btn-danger\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-stop\"></span> Parar Camara\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"center-block\" *ngIf=\"!isStreaming\" style=\"margin-bottom: 15px\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<button (click)=\"iniciaStream()\" class=\"btn btn-sm btn-info center-block\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\"></span> Iniciar Camara\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.nombre.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Nombre</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.apellidoPaterno.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Apellido Paterno</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"apellidoPaterno\" placeholder=\"Apellido Paterno\" formControlName=\"apellidoPaterno\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.apellidoMaterno.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Apellido Materno</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"apellidoMaterno\" placeholder=\"Apellido Materno\" formControlName=\"apellidoMaterno\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.telefono.valid || !eventualForm.controls.telefonoEmergencia.valid}\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Tel&eacute;fono</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enTelefono\" placeholder=\"Tel&eacute;fono\" formControlName=\"telefono\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Emergencias</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enTelefonoEmergencias\" placeholder=\"Emergencias\" formControlName=\"telefonoEmergencia\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.razonSocial.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Empresa</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"razonSocial\"\n\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Empresa\"\n\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t   ngxTypeahead\n\t\t\t\t\t\t\t\t\t\t\t\t   [taUrl]=\"url\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [taApi]=\"api\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [taItemTpl]=\"itemTpl\"\n\t\t\t\t\t\t\t\t\t\t\t\t   (taSelected)=\"handleResultSelected($event)\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ng-template #itemTpl let-result class=\"list-item\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-briefcase\"></i> <strong>{{result.result.nombreEmpresa.toUpperCase()}}</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.ocupacion.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Ocupaci&oacute;n</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"ocupacion\" placeholder=\"Ocupacon\" formControlName=\"ocupacion\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.accesoOtorgado.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Acceso</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"acceso\" placeholder=\"Persona que Otorga el Acceso\" formControlName=\"accesoOtorgado\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !eventualForm.controls.motivoAcceso.valid }\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Motivo</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"motivo\" placeholder=\"Motivo del Acceso\" formControlName=\"motivoAcceso\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<div class=\"center-block\" style=\"width: 375px;\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"margin-right: 10px\" [disabled]=\"!eventualForm.valid || completed\" (click)=\"guardar();\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-save\"></i>&nbsp;&nbsp;&nbsp;Guardar\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"margin-right: 10px\" [disabled]=\"!completed\" (click)=\"imprimirAcceso();\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-print\"></i>&nbsp;&nbsp;&nbsp;Imprimir\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelEventual()\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-stop\"></i>&nbsp;&nbsp;&nbsp;Cancelar\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/layout/eventual/eventual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_presto_service__ = __webpack_require__("../../../../../src/app/common/presto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_webRTC_service__ = __webpack_require__("../../../../../src/app/common/webRTC.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_global__ = __webpack_require__("../../../../../src/app/common/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_msg_service__ = __webpack_require__("../../../../../src/app/common/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventualComponent = (function () {
    function EventualComponent(_prestoService, _webRTC, _router, _authService, _msgService) {
        this._prestoService = _prestoService;
        this._webRTC = _webRTC;
        this._router = _router;
        this._authService = _authService;
        this._msgService = _msgService;
        this.completed = false;
        this.isStreaming = false;
        this.filesToUpload = [];
        this.url = __WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GLOBAL */].RESTAPINJS + 'searchEmpresa';
        this.api = 'http';
    }
    EventualComponent.prototype.ngOnInit = function () {
        this._prestoService.setBreadCrumb([{
                routerLink: '/eventual',
                txt: 'Registro Eventual',
                class: 'active'
            }]);
        this.eventualForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            nombre: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            apellidoPaterno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            apellidoMaterno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            telefono: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            telefonoEmergencia: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            ocupacion: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            razonSocial: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            accesoOtorgado: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            motivoAcceso: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            imageBase64: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    EventualComponent.prototype.iniciaStream = function () {
        this._webRTC.startStream(this.hardwareVideo, this.photoCanvas);
        this.isStreaming = true;
    };
    EventualComponent.prototype.stopStream = function () {
        this.isStreaming = false;
        this._webRTC.stopStream();
    };
    EventualComponent.prototype.tomarFoto = function () {
        this.imageUrl = this._webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
        this.imgEventual.nativeElement.style.background = 'url(\'' + this.imageUrl + '\')';
        this.imgEventual.nativeElement.style.backgroundPosition = 'center';
        this.imgEventual.nativeElement.style.backgroundSize = '150% 100%';
        this.eventualForm.controls['imageBase64'].setValue(this.imageUrl);
        this.stopStream();
    };
    EventualComponent.prototype.handleResultSelected = function (result) {
        this.eventualForm.controls['razonSocial'].setValue(result.nombreEmpresa.toUpperCase());
        this.idEmpresa = result._id;
    };
    EventualComponent.prototype.guardar = function () {
        var _this = this;
        if (!this.eventualForm.valid) {
            return;
        }
        var eventual = {
            nombre: this.eventualForm.controls.nombre.value.toUpperCase(),
            apellidoPaterno: this.eventualForm.controls.apellidoPaterno.value.toUpperCase(),
            apellidoMaterno: this.eventualForm.controls.apellidoMaterno.value.toUpperCase(),
            ocupacion: this.eventualForm.controls.ocupacion.value.toUpperCase(),
            accesoOtorgado: this.eventualForm.controls.accesoOtorgado.value.toUpperCase(),
            telefono: this.eventualForm.controls.telefono.value,
            telefonoEmergencia: this.eventualForm.controls.telefonoEmergencia.value,
            fechaAcceso: new Date(),
            idEmpresa: this.idEmpresa,
            imageBase64: this.eventualForm.controls.imageBase64.value,
            motivoAcceso: this.eventualForm.controls.motivoAcceso.value.toUpperCase()
        };
        this.uploadBusy = this._prestoService.saveEventual(eventual).toPromise().then(function (resp) {
            return _this.uploadImageEventual(resp);
        }).then(function (resp) {
            _this._msgService.setMsg(resp);
            _this.completed = true;
            // return this.cancelEventual();
        }).catch(function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
            else {
                _this._msgService.setMsg(err);
            }
        });
    };
    EventualComponent.prototype.uploadImageEventual = function (resp) {
        var file = __WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GLOBAL */].dataURLtoFile(this.imageUrl, resp._id + '.png');
        this.filesToUpload = [file];
        return this._prestoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GLOBAL */].RESTAPINJS + 'saveImageEventual/' + resp._id, [], this.filesToUpload, 'image');
    };
    EventualComponent.prototype.cancelEventual = function () {
        this._router.navigate(['/']);
    };
    EventualComponent.prototype.imprimirAcceso = function () {
        $('.divImpresion').printThis({
            loadCSS: __WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GLOBAL */].BASEURL + "assets/styleEventual.css",
            importStyle: false
        });
    };
    return EventualComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgEventual'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], EventualComponent.prototype, "imgEventual", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hardwareVideo'),
    __metadata("design:type", Object)
], EventualComponent.prototype, "hardwareVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('photoCanvas'),
    __metadata("design:type", Object)
], EventualComponent.prototype, "photoCanvas", void 0);
EventualComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-eventual',
        template: __webpack_require__("../../../../../src/app/layout/eventual/eventual.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/eventual/eventual.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__common_webRTC_service__["a" /* WebRTCService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_webRTC_service__["a" /* WebRTCService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_webRTC_service__["a" /* WebRTCService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__common_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_msg_service__["a" /* MsgService */]) === "function" && _f || Object])
], EventualComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=eventual.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/eventual/eventual.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventualModule", function() { return EventualModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventual_component__ = __webpack_require__("../../../../../src/app/layout/eventual/eventual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventual_routing__ = __webpack_require__("../../../../../src/app/layout/eventual/eventual-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/layout/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_typeahead__ = __webpack_require__("../../../../ngx-typeahead/modules/ngx-typeahead.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_busy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EventualModule = (function () {
    function EventualModule() {
    }
    return EventualModule;
}());
EventualModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__eventual_routing__["a" /* EventualRouting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_typeahead__["a" /* NgxTypeaheadModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__eventual_component__["a" /* EventualComponent */]]
    })
], EventualModule);

//# sourceMappingURL=eventual.module.js.map

/***/ }),

/***/ "../../../../../src/assets/customer-512.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "customer-512.b125eae44b6c6b5b6dfb.png";

/***/ }),

/***/ "../../../../../src/assets/eventualesBck.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eventualesBck.83bfbbcc7dad4b042136.jpg";

/***/ })

});
//# sourceMappingURL=eventual.module.chunk.js.map