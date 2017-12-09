webpackJsonp(["enrolamiento.module"],{

/***/ "../../../../../src/app/auth/enrolamiento.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolamientoGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_presto_service__ = __webpack_require__("../../../../../src/app/common/presto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnrolamientoGuard = (function () {
    function EnrolamientoGuard(prestoService, _router) {
        this.prestoService = prestoService;
        this._router = _router;
    }
    EnrolamientoGuard.prototype.canActivate = function (next, state) {
        if (this.isPerson(this.prestoService.enrolamientoPerson.getValue())) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    };
    EnrolamientoGuard.prototype.isPerson = function (obj) {
        return obj._id !== undefined;
    };
    return EnrolamientoGuard;
}());
EnrolamientoGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EnrolamientoGuard);

var _a, _b;
//# sourceMappingURL=enrolamiento.guard.js.map

/***/ }),

/***/ "../../../../../src/app/common/webRTC.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebRTCService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WebRTCService = (function () {
    function WebRTCService() {
        this._navigator = navigator;
    }
    WebRTCService.prototype.startStream = function (hardwareVideo, photoCanvas) {
        var _this = this;
        var video = hardwareVideo.nativeElement;
        this._navigator = navigator;
        this._navigator.getUserMedia = (this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
            || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia);
        this._navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
            _this.localStream = stream;
            video.srcObject = stream;
            video.play();
        });
        console.log("start");
    };
    WebRTCService.prototype.takePicture = function (hardwareVideo, photoCanvas) {
        var pc = document.querySelector('#photoCanvas');
        var video = document.querySelector('#hardwareVideo');
        pc.setAttribute('width', video.videoWidth);
        pc.setAttribute('height', video.videoHeight);
        pc.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        var data = pc.toDataURL('image/png');
        //
        // let photoEle = document.createElement('img');
        //photoEle.src = data;
        //document.body.appendChild(photoEle);
        return data;
    };
    WebRTCService.prototype.stopStream = function () {
        var tracks = this.localStream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
    };
    return WebRTCService;
}());
WebRTCService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WebRTCService);

//# sourceMappingURL=webRTC.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/enrolamiento/enrolamiento-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolamientoRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enrolamiento_component__ = __webpack_require__("../../../../../src/app/layout/enrolamiento/enrolamiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_enrolamiento_guard__ = __webpack_require__("../../../../../src/app/auth/enrolamiento.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__enrolamiento_component__["a" /* EnrolamientoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_enrolamiento_guard__["a" /* EnrolamientoGuard */]] }
];
var EnrolamientoRouting = (function () {
    function EnrolamientoRouting() {
    }
    return EnrolamientoRouting;
}());
EnrolamientoRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], EnrolamientoRouting);

//# sourceMappingURL=enrolamiento-routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/enrolamiento/enrolamiento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#mainEnrolamiento .jumbotron {\n\tpadding: 50px;\n\tborder-radius: 20px;\n}\n\nvideo {\n\twidth: 100%;\n\tborder-radius: 20px;\n}\n\n#photoCanvas {\n\tdisplay: none;\n}\n\n.form-control-en {\n\twidth: 100%;\n\theight: 40px;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n\tcolor: black;\n\tbackground-color: transparent;\n\tborder-bottom: 2px solid black !important;\n\tborder-radius: 2px;\n\t/*  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */\n\ttransition: border-color ease-in-out .15s, box-shadow ease-in-out;\n\tdisplay: inline-block;\n\twidth: auto;\n\tvertical-align: middle;\n}\n\n/*\n#pictureContainer img{\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay: block;\n\tborder-radius: 20px;\n\tmargin-bottom: 20px;\n\twidth: 100%;\n}\n*/\n\n\n\n\n.divRadioEmprea{\n\tmargin-left: auto;margin-right: auto;\n\twidth: 1px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/enrolamiento/enrolamiento.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"mainEnrolamiento\">\n\n\t<div class=\"row\"  class=\"navbar-fixed-top\" [ngStyle]=\"{\n\t\t\t\t'height' : completed ? '150px' : '0px',\n\t\t\t\t'width' : completed ? '100%' : '0px',\n\t\t\t\ttransition : '1s',\n\t\t\t\t'transition-delay':  completed ? '0' : '.5',\n\t\t\t\t'margin-top' : '120px'\n\t\t\t}\">\n\n\t\t<div class=\"col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2\n\t\t\t\tcol-lg-8 col-md-8 col-sm-8 col-xs-8\" [ngStyle]=\"{\n\t\t\t\t\t'transition': '1s' , 'transition-delay':  completed ? '.5' : '0'  , 'opacity' : completed ? '1' : '0'\n\t\t\t\t\t}\">\n\n\t\t\t<div class=\" panel panel-info\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t<i class=\" glyphicon glyphicon-check\"></i>&nbsp;&nbsp;Datos Completos</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t¿Desea finalizar Enrolamiento?\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"center-block\" style=\"width: 100px\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"finalizarEnrol()\" [disabled]=\"!completed\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-save-file\"></i> Finalizar\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\t<form #formEnrolamiento class=\"form-horizontal\" [formGroup]=\"enrolFrom\" [ngStyle]=\"{\n\t\t\t\t\t'transition': '1s',\n\t\t\t\t\t'margin-top' : completed  ? '170px' : '0px'\n\t\t\t\t\t}\"  >\n\t\t<div id=\"accordionEnrolamiento\">\n\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<button type=\"button\" (click)=\"changeBread(this,{'title':'Datos Personales'})\"\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-parent=\"#accordionEnrolamiento\" href=\"#collapseInactivo\" class=\"btn btn-primary btn-circle\">\n\t\t\t\t\t\t<i class=\" glyphicon glyphicon-user\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\tDatos Personales\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body panel-collapse in\" id=\"collapseInactivo\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- Foto y Camara -->\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div id='pictureContainer' class=\"col-lg-12 col-sm-12 col-md-12 col-xs-12\">\n\n\t\t\t\t\t\t\t\t\t<div [style.display]=\" isStreaming ? 'block' : 'none' \">\n\t\t\t\t\t\t\t\t\t\t<video #hardwareVideo id=\"hardwareVideo\" autoplay></video>\n\t\t\t\t\t\t\t\t\t\t<canvas #photoCanvas id=\"photoCanvas\"></canvas>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div [style.display]=\" !isStreaming ? 'block' : 'none' \">\n\t\t\t\t\t\t\t\t\t\t<app-credencial [personEnrol] = \"personCred\" ></app-credencial>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6 col-md-6 col-xs-6\n\t\t\t\t\t\t\t\t\tcol-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"isStreaming\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"tomarFoto()\" class=\"btn btn-sm btn-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\"></span> Captuar Foto\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"stopStream()\" class=\"btn btn-sm btn-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-stop\"></span> Parar Camara\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"!isStreaming\">\n\t\t\t\t\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"iniciaStream()\" class=\"btn btn-sm btn-info center-block\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\"></span> Iniciar Camara\n\t\t\t\t\t\t\t\t\t\t</button>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Termina Foto y Camara -->\n\t\t\t\t\t\t<!-- Datos Personales -->\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.nombre.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Nombre</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.apellidoPaterno.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Apellido Paterno</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enApPaterno\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Apellido Paterno\" formControlName=\"apellidoPaterno\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.apellidoMaterno.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Apellido Materno</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enApMaterno\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Apellido Materno\" formControlName=\"apellidoMaterno\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.fechaNacimiento.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Fecha de Nacimiento</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enFechaNacimiento\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"dd/mm/YYYY\" formControlName=\"fechaNacimiento\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.lugarNacimiento.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Lugar de Nacimiento</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enLugarNacimiento\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Lugar de Nacimiento\" formControlName=\"lugarNacimiento\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.sexo.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Sexo</span>\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"enCmbSexo\" id=\"enCmbSexo\" #enCmbSexo\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"cmbSexoChange(enCmbSexo.value)\" formControlName=\"sexo\">\n\t\t\t\t\t\t\t\t\t\t\t<option  value=\"\">-- Seleccione --</option>\n\t\t\t\t\t\t\t\t\t\t\t<option [selected]=\" enrolFrom.controls.sexo.value == 'M' \" value=\"M\">Masculino</option>\n\t\t\t\t\t\t\t\t\t\t\t<option [selected]=\" enrolFrom.controls.sexo.value == 'F' \"value=\"F\">Femenino</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{'has-error' : !enrolFrom.controls.codigoPostal.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">C.P.</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enCodigoPostal\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"C&oacute;digo Postal\" formControlName=\"codigoPostal\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\"  [ngClass]=\"{'has-error' : !enrolFrom.controls.telefono.valid }\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Tel&eacute;fono</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enTelefono\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Tel&eacute;fono\" formControlName=\"telefono\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Emergencias</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enTelefonoEmergencias\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Emergencias\" formControlName=\"telefonoEmergencia\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Contacto Emergencias</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enContactoEmergencias\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Contacto Emergencias\" formControlName=\"contactoEmergencia\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Termina Datos Personales -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Acceso Otorgado</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enAccesoOtorgado\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Acceso Otorgado ...\" formControlName=\"accesoOtorgado\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Motivo de Acceso</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enMotivoAcceso\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Motivo de Acceso\" formControlName=\"motivoAcceso\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Registro Patronal</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enRegistroPatronal\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Registro Patronal\" formControlName=\"registroPatronal\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">NSS</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enNSS\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"NSS\" formControlName=\"nss\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">RFC</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enRFC\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"RFC\" formControlName=\"rfc\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Estado Civil</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enEstadoCivil\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Estado Civil\" formControlName=\"estadoCivil\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Tipo de Sangre</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enTipoSangre\"\n\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Tipo de Sangre\" formControlName=\"tipoSangre\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\n\t\t\t\t\t\t\tcol-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Empresas para las que labora</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let empresa of personEnrolar.empresa ; let iEmpresa = index;\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\" style=\"margin-top: 45px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:block;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"divRadioEmprea\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radioEmpresa\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   [checked]=\"iEmpresa === 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   [value]=\"empresa.id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   (change)=\"onEmpresaChange(empresa)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-11\">\n\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{empresa.nombreEmpresa}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Ocupaci&oacute;n</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enOcupacion{{iEmpresa}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Ocupaci&oacute;n\" formControlName=\"ocupacionEmpresa_{{iEmpresa}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Fecha de Contrato</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"enEmpresaFC{{iEmpresa}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Nombre Empresa\" formControlName=\"fechaContratoEmpresa_{{iEmpresa}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<button type=\"button\" (click)=\"changeBread(this,{'title':'Biométricos'})\" data-toggle=\"collapse\"\n\t\t\t\t\t\t\tdata-parent=\"#accordionEnrolamiento\" href=\"#collapseBiometricos\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary btn-circle\">\n\t\t\t\t\t\t<i class=\" glyphicon glyphicon-user\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\tBiom&eacute;tricos\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body panel-collapse collapse\" id=\"collapseBiometricos\">\n\t\t\t\t\tBasic panel\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t</div>\n\t</form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/layout/enrolamiento/enrolamiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolamientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_webRTC_service__ = __webpack_require__("../../../../../src/app/common/webRTC.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_presto_service__ = __webpack_require__("../../../../../src/app/common/presto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_global__ = __webpack_require__("../../../../../src/app/common/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_PersonaEnrolar__ = __webpack_require__("../../../../../src/app/models/PersonaEnrolar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnrolamientoComponent = (function () {
    function EnrolamientoComponent(webRTC, _prestoService, _router) {
        this.webRTC = webRTC;
        this._prestoService = _prestoService;
        this._router = _router;
        this.currImgPhoto = __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].MPHOTOURL;
        this.personEnrolar = new __WEBPACK_IMPORTED_MODULE_5__models_PersonaEnrolar__["a" /* PersonaEnrolar */]();
        this.completed = false;
        /* Datos generados en el proceso de Enrolamiento, se van a la BD como control*/
        this.valueQR = '1';
        this.credEmpresa = '';
        this.credOcupacion = '';
        this.filesToUpload = [];
        this.isStreaming = false;
    }
    EnrolamientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enrolFrom = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            nombre: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            apellidoPaterno: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            apellidoMaterno: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            fechaNacimiento: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            lugarNacimiento: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            sexo: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            codigoPostal: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            telefono: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            telefonoEmergencia: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            contactoEmergencia: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            nss: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            rfc: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            estadoCivil: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            tipoSangre: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            registroPatronal: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            accesoOtorgado: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            motivoAcceso: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            image: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            enrolComplete: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required),
            empresaCredId: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](''),
            _id: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required)
        });
        this.enrolFrom.get('nombre').valueChanges.subscribe(function (value) {
            _this.personEnrolar.nombre = value;
            _this.qrModelChange();
        });
        this.enrolFrom.get('apellidoPaterno').valueChanges.subscribe(function (value) {
            _this.personEnrolar.apellidoPaterno = value;
            _this.qrModelChange();
        });
        this.enrolFrom.get('rfc').valueChanges.subscribe(function (value) {
            _this.personEnrolar.rfc = value;
            _this.qrModelChange();
        });
        this.enrolFrom.get('image').valueChanges.subscribe(function (value) {
            _this.personEnrolar.image = value;
            _this.qrModelChange();
        });
        this.enrolFrom.valueChanges.subscribe(function (values) { return _this.validateFormCompletion(); });
        this.subscriber = this._prestoService.personEnrolar.subscribe(function (res) {
            _this.personEnrolar.empresa.forEach(function (value, index) {
                _this.enrolFrom.removeControl("ocupacionEmpresa_" + index);
                _this.enrolFrom.removeControl("fechaContratoEmpresa_" + index);
            });
            _this.personEnrolar = new __WEBPACK_IMPORTED_MODULE_5__models_PersonaEnrolar__["a" /* PersonaEnrolar */](res);
            //Setear datos a form group
            delete res.empresa;
            _this.enrolFrom.setValue(res);
            _this.cmbSexoChange(_this.personEnrolar.sexo);
            _this.onEmpresaChange(_this.personEnrolar.empresa[0]);
            _this.personEnrolar.empresa.forEach(function (item, index) {
                var controlOcupacion = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](item.ocupacion, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required);
                var controlFechaContrato = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](item.fechaContrato, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required);
                _this.enrolFrom.addControl('ocupacionEmpresa_' + index, controlOcupacion);
                _this.enrolFrom.addControl('fechaContratoEmpresa_' + index, controlFechaContrato);
            });
        }, function (error) { return console.log(error); });
        this._prestoService.setBreadCrumb([{
                routerLink: "/enrolamiento",
                txt: "Enrolamiento",
                class: ""
            }, {
                routerLink: "/enrolamiento",
                txt: "Finalizar Enrolamiento",
                class: "active"
            }]);
    };
    EnrolamientoComponent.prototype.validateFormCompletion = function () {
        this.completed = this.enrolFrom.valid
            && (this.currImgPhoto.includes('image/png;base64') || this.enrolFrom.controls['image'].value !== '');
    };
    EnrolamientoComponent.prototype.ngOnDestroy = function () {
        if (this.isStreaming) {
            this.stopStream();
        }
        this.subscriber.unsubscribe();
        this._prestoService.resetPerson();
    };
    EnrolamientoComponent.prototype.iniciaStream = function () {
        this.webRTC.startStream(this.hardwareVideo, this.photoCanvas);
        this.isStreaming = true;
    };
    EnrolamientoComponent.prototype.stopStream = function () {
        this.webRTC.stopStream();
        this.isStreaming = false;
    };
    EnrolamientoComponent.prototype.tomarFoto = function () {
        var photoInfo = document.createElement('img');
        photoInfo.src = this.webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
        this.stopStream();
        this.currImgPhoto = photoInfo.src;
        this.uploadEnrolImage();
        this.qrModelChange();
    };
    EnrolamientoComponent.prototype.changeBread = function (ev, data) {
        document.querySelector(".breadcrumb > li.active")
            .innerHTML = data.title;
    };
    EnrolamientoComponent.prototype.qrModelChange = function () {
        var imgDisplay = this.currImgPhoto.includes('image/png;base64') ? this.currImgPhoto : __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].RESTAPINJS + 'getImageEnrol/' + this.personEnrolar.image;
        this.personCred = {
            nombre: this.personEnrolar.nombre,
            apellidoPaterno: this.personEnrolar.apellidoPaterno,
            rfc: this.personEnrolar.rfc,
            qrCode: this.personEnrolar.getQRValue(),
            nombreEmpresa: this.credEmpresa,
            ocupacion: this.credOcupacion,
            imgBase64: imgDisplay
        };
    };
    EnrolamientoComponent.prototype.onEmpresaChange = function (empresa) {
        this.credEmpresa = empresa.nombreEmpresa;
        this.credOcupacion = empresa.ocupacion;
        this.credIdEmpresa = empresa._id;
        this.enrolFrom.controls['empresaCredId'].setValue(empresa._id);
        this.qrModelChange();
    };
    EnrolamientoComponent.prototype.cmbSexoChange = function (sexValue) {
        this.personEnrolar.sexo = sexValue;
        switch (sexValue) {
            case __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].MALE:
                this.currImgPhoto = __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].MPHOTOURL;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].FEMALE:
                this.currImgPhoto = __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].FPHOTOURL;
                break;
            default:
                this.currImgPhoto = __WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].MPHOTOURL;
        }
        this.qrModelChange();
    };
    EnrolamientoComponent.prototype.uploadEnrolImage = function () {
        var _this = this;
        var file = this.dataURLtoFile(this.currImgPhoto, this.personEnrolar._id + '.png');
        this.filesToUpload = [file];
        var oldImageFile = this.personEnrolar.image !== '' ? this.personEnrolar.image : 'null';
        this._prestoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_3__common_global__["a" /* GLOBAL */].RESTAPINJS + 'saveEnrolImage/' + this.personEnrolar._id + '/' + oldImageFile, [], this.filesToUpload, 'image')
            .then(function (success) {
            _this.enrolFrom.controls['image'].setValue(success.image);
            _this.validateFormCompletion();
        }, function (error) {
            console.log("Ocurrio un Error al subir Archivo =====> ");
            console.log(error);
        });
    };
    EnrolamientoComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    EnrolamientoComponent.prototype.finalizarEnrol = function () {
        var _this = this;
        this.enrolFrom.controls['enrolComplete'].setValue('true');
        this._prestoService.saveEnrolamiento(this.enrolFrom.value).subscribe(function (res) {
            _this._router.navigate(['/']);
        }, function (err) {
            alert('Ocurrio un Error al Guardar Informacion : ' + err.message);
        });
    };
    return EnrolamientoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('hardwareVideo'),
    __metadata("design:type", Object)
], EnrolamientoComponent.prototype, "hardwareVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('photoCanvas'),
    __metadata("design:type", Object)
], EnrolamientoComponent.prototype, "photoCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('currImgPhoto'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], EnrolamientoComponent.prototype, "imgEle", void 0);
EnrolamientoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-enrolamiento',
        template: __webpack_require__("../../../../../src/app/layout/enrolamiento/enrolamiento.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/enrolamiento/enrolamiento.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_webRTC_service__["a" /* WebRTCService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_webRTC_service__["a" /* WebRTCService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_webRTC_service__["a" /* WebRTCService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], EnrolamientoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=enrolamiento.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/enrolamiento/enrolamiento.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolamientoModule", function() { return EnrolamientoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enrolamiento_routing__ = __webpack_require__("../../../../../src/app/layout/enrolamiento/enrolamiento-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enrolamiento_component__ = __webpack_require__("../../../../../src/app/layout/enrolamiento/enrolamiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_enrolamiento_guard__ = __webpack_require__("../../../../../src/app/auth/enrolamiento.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credencial_credencial_module__ = __webpack_require__("../../../../../src/app/layout/credencial/credencial.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EnrolamientoModule = (function () {
    function EnrolamientoModule() {
    }
    return EnrolamientoModule;
}());
EnrolamientoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__enrolamiento_routing__["a" /* EnrolamientoRouting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__credencial_credencial_module__["a" /* CredencialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__enrolamiento_component__["a" /* EnrolamientoComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__auth_enrolamiento_guard__["a" /* EnrolamientoGuard */]]
    })
], EnrolamientoModule);

//# sourceMappingURL=enrolamiento.module.js.map

/***/ })

});
//# sourceMappingURL=enrolamiento.module.chunk.js.map