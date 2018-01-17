webpackJsonp(["common"],{

/***/ "../../../../../src/app/common/msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgService = (function () {
    function MsgService() {
        this.MsgSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.msg$ = this.MsgSubject.asObservable();
    }
    MsgService.prototype.setMsg = function (msg) {
        this.MsgSubject.next(msg);
    };
    return MsgService;
}());
MsgService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MsgService);

//# sourceMappingURL=msg.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/presto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/common/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_PersonaEnrolar__ = __webpack_require__("../../../../../src/app/models/PersonaEnrolar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__msg_service__ = __webpack_require__("../../../../../src/app/common/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrestoService = (function () {
    function PrestoService(http, _authService, _router, _msgService) {
        this.http = http;
        this._authService = _authService;
        this._router = _router;
        this._msgService = _msgService;
        this.enrolamientoResultsNombre = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();
        this.enrolamientoPerson = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_4__models_PersonaEnrolar__["a" /* PersonaEnrolar */]());
        this.personEnrolar = this.enrolamientoPerson.asObservable();
        this.impresionPerson = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.impresion$ = this.impresionPerson.asObservable();
        this.subjectManageEnrolamiento = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.manageEnrol$ = this.subjectManageEnrolamiento.asObservable();
        this.breadcrumbBS = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.breadEmitted$ = this.breadcrumbBS.asObservable();
    }
    PrestoService.prototype.getEnrolamientoByName = function (param, pageNumber) {
        var _this = this;
        this._prestoSearchBy = param;
        this.lastSearch = param;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .append('nombre', param[0].toUpperCase())
            .append('apellidoPaterno', param[1].toUpperCase())
            .append('page', pageNumber.toString())
            .append('maxPerPage', __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].DEFAULTPERPAGE.toString());
        this.pageFunction = 'getEnrolamientoByName';
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (res) {
            _this.enrolamientoResultsNombre.next(res);
        }, function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
        });
    };
    PrestoService.prototype.getSearchEnrolamiento = function (jsonParams, pageNumber) {
        var _this = this;
        this.lastSearch = jsonParams;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        for (var obj in jsonParams) {
            if (jsonParams[obj] && jsonParams[obj] !== '') {
                params = params.append(obj, __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
            }
        }
        this.pageFunction = 'getSearchEnrolamiento';
        params = params.append('page', pageNumber.toString());
        params = params.append('maxPerPage', __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].DEFAULTPERPAGE.toString());
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (res) {
            _this.enrolamientoResultsNombre.next(res);
        }, function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
        });
    };
    PrestoService.prototype.getSearchManagement = function (jsonParams, pageNumber) {
        var _this = this;
        this.lastSearch = jsonParams;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        for (var obj in jsonParams) {
            if (jsonParams[obj] && jsonParams[obj] !== '') {
                params = params.append(obj, __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
            }
        }
        params = params.append('page', pageNumber.toString());
        params = params.append('maxPerPage', __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].DEFAULTPERPAGE.toString());
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (resp) {
            if (resp.total > 0) {
                _this.setManagementRes(resp);
            }
            else {
                _this._msgService.setMsg({ message: 'No se encontraron Registros' });
            }
        }, function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
            else {
                _this._msgService.setMsg(err);
            }
        });
    };
    PrestoService.prototype.getNextPageByName = function (pageNumber) {
        this[this.pageFunction](this.lastSearch, pageNumber);
    };
    PrestoService.prototype.getNextPageByManage = function (pageNumber) {
        this.getSearchManagement(this.lastSearch, pageNumber);
    };
    PrestoService.prototype.setPersonEnrolamiento = function (person) {
        var results = this.enrolamientoResultsNombre.getValue();
        this.enrolamientoPerson.next(person);
    };
    PrestoService.prototype.setImpresion = function (personId) {
        var results = this.enrolamientoResultsNombre.getValue();
        this.impresionPerson.next(new __WEBPACK_IMPORTED_MODULE_4__models_PersonaEnrolar__["a" /* PersonaEnrolar */](results.find(function (res) {
            return res._id === personId;
        })));
    };
    PrestoService.prototype.saveEnrolamiento = function (personEnrol) {
        console.log(personEnrol);
        var params = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].toHttpParams(personEnrol, ['_id', 'empresaId', 'empresaCredId', 'image', 'enrolComplete', 'enrolActive', 'rutaImagenes', 'biometricoFinal', 'biometrico']);
        params = params.delete('empresa');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'saveEnrol', params, { withCredentials: true });
    };
    PrestoService.prototype.saveEventual = function (eventual) {
        var params = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].toHttpParams(eventual, ['idEmpresa', 'imageBase64', 'fechaAcceso']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'saveEventual', params, { withCredentials: true });
    };
    PrestoService.prototype.makeFileRequest = function (url, params, files, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                if (Array.isArray(name)) {
                    formData.append(name[i], files[i], files[i].name);
                }
                else {
                    formData.append(name, files[i], files[i].name);
                }
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send(formData);
        });
    };
    PrestoService.prototype.setBreadCrumb = function (params) {
        this.breadcrumbBS.next(params);
    };
    PrestoService.prototype.resetPerson = function () {
        this.enrolamientoPerson.next(new __WEBPACK_IMPORTED_MODULE_4__models_PersonaEnrolar__["a" /* PersonaEnrolar */]());
    };
    PrestoService.prototype.getEventual = function (pageNumber) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .append('page', pageNumber.toString())
            .append('maxPerPage', __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].DEFAULTPERPAGE.toString());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'getEventuales', { params: params, withCredentials: true });
    };
    PrestoService.prototype.getCargaMasiva = function (pageNumber) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .append('page', pageNumber.toString())
            .append('maxPerPage', __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].DEFAULTPERPAGEMASIVA.toString());
        var idUser = this._authService.getIdentity().user._id;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].RESTAPINJS + 'getCargaMasiva/' + idUser, { params: params, withCredentials: true });
    };
    PrestoService.prototype.setManagementRes = function (data) {
        this.subjectManageEnrolamiento.next(data);
    };
    return PrestoService;
}());
PrestoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__msg_service__["a" /* MsgService */]) === "function" && _d || Object])
], PrestoService);

var _a, _b, _c, _d;
//# sourceMappingURL=presto.service.js.map

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
        // photoEle.src = data;
        // document.body.appendChild(photoEle);
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

/***/ "../../../../../src/app/directives/upper-case-text.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperCaseTextDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpperCaseTextDirective = (function () {
    function UpperCaseTextDirective(ref) {
        this.ref = ref;
    }
    return UpperCaseTextDirective;
}());
UpperCaseTextDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: 'input[type=text]',
        host: {
            '(input)': 'ref.nativeElement.value=$event.target.value.toUpperCase()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], UpperCaseTextDirective);

var _a;
//# sourceMappingURL=upper-case-text.directive.js.map

/***/ }),

/***/ "../../../../../src/app/layout/credencial/credencial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerCred {\n\tbackground-color: white;\n\tborder-radius: 20px;\n\tbox-shadow: 10px 10px 10px;\n\twidth: 300px;\n\theight: 450px;\n\toverflow: hidden;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 2px solid #ccc;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/vectorbck.jpg") + ");\n\tbackground-size: 100% 200%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat\n}\n\n.header {\n\theight: 20px;\n\twidth: 300px;\n\tborder-top-right-radius: 20px;\n\tborder-top-left-radius: 20px;\n}\n\n.mainbody {\n\ttop: 27px;\n\twidth: 300px;\n}\n\n.mainbody > img {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 100px;\n\theight: 150px;\n\tdisplay: block;\n\tvertical-align: middle;\n\tbackground-size: 200% auto;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n.dataBody {\n\n\ttop: 177px;\n\theight: 80px;\n\twidth: 300px;\n}\n\n.dataBody > table {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 270px;\n\ttext-align: center;\n}\n\n.dataBody > table > tbody > tr > td {\n\tpadding: 5px;\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n}\n\n.containerCred > h1, h2, h3, h4, h5, hr {\n\tmargin: 0px;\n}\n\n.trSeparador {\n\theight:5px;;\n}\n\n.trSeparador > td {\n\tpadding-right: 30px !important;\n\tpadding-left: 30px !important;\n}\n\n.trSeparador > td > hr {\n\tmargin: 0px !important;\n\tborder-top: 2px solid black;\n}\n\n.footer {\n\tbottom: 0;\n\tposition: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/credencial/credencial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerCred\">\n\t<div class=\"header\">\n\t</div>\n\t<div class=\"mainbody\">\n\t\t<img [ngStyle]=\"{'background-image': 'url(' + personEnrol.imgBase64 + ')'}\" *ngIf=\"!personEnrol.imgName\">\n\t\t<img src=\"{{imageUrl}}\" *ngIf=\"personEnrol.imgName\">\n\t</div>\n\t<div class=\"dataBody\">\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<h3>{{personEnrol.nombre}} {{personEnrol.apellidoPaterno}}</h3></td>\n\t\t\t</tr>\n\t\t\t<tr class=\"trSeparador\">\n\t\t\t\t<td>\n\t\t\t\t\t<hr>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<h4>{{personEnrol.nombreEmpresa}}</h4>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<h5>{{personEnrol.ocupacion}}</h5>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<ngx-qrcode [qrc-element-type]=\"'canvas'\" [qrc-value]=\"personEnrol.qrCode\" qrc-version=\"3\"\n\t\t\t\t\t\t\t\tqrc-errorCorrectionLevel=\"L\">\n\t\t\t\t\t</ngx-qrcode>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/credencial/credencial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredencialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_interface__ = __webpack_require__("../../../../../src/app/models/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__("../../../../../src/app/common/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CredencialComponent = (function () {
    function CredencialComponent() {
    }
    CredencialComponent.prototype.ngOnInit = function () {
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GLOBAL */].RESTAPINJS + 'getImageEnrol/' + this.personEnrol.imgName;
        if (!this.personEnrol.imgName) {
            this.imageUrl = 'assets/s.gif';
        }
    };
    return CredencialComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_interface__["TpersonCredencial"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_interface__["TpersonCredencial"]) === "function" && _a || Object)
], CredencialComponent.prototype, "personEnrol", void 0);
CredencialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-credencial',
        template: __webpack_require__("../../../../../src/app/layout/credencial/credencial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/credencial/credencial.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CredencialComponent);

var _a;
//# sourceMappingURL=credencial.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/credencial/credencial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredencialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credencial_component__ = __webpack_require__("../../../../../src/app/layout/credencial/credencial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__ = __webpack_require__("../../../../ngx-qrcode2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CredencialModule = (function () {
    function CredencialModule() {
    }
    return CredencialModule;
}());
CredencialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__["a" /* NgxQRCodeModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__credencial_component__["a" /* CredencialComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__credencial_component__["a" /* CredencialComponent */]]
    })
], CredencialModule);

//# sourceMappingURL=credencial.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/shared-modules/shared-modules.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModulesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_upper_case_text_directive__ = __webpack_require__("../../../../../src/app/directives/upper-case-text.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModulesModule = (function () {
    function SharedModulesModule() {
    }
    return SharedModulesModule;
}());
SharedModulesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_upper_case_text_directive__["a" /* UpperCaseTextDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directives_upper_case_text_directive__["a" /* UpperCaseTextDirective */]]
    })
], SharedModulesModule);

//# sourceMappingURL=shared-modules.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/PersonaEnrolar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaEnrolar; });
var PersonaEnrolar = (function () {
    function PersonaEnrolar(values) {
        this.image = null;
        this.enrolComplete = false;
        this.enrolActive = false;
        if (values) {
            this._id = values._id;
            this.nombre = values.nombre;
            this.apellidoPaterno = values.apellidoPaterno;
            this.apellidoMaterno = values.apellidoMaterno;
            this.fechaNacimiento = values.fechaNacimiento;
            this.lugarNacimiento = values.lugarNacimiento;
            this.sexo = values.sexo;
            this.codigoPostal = values.codigoPostal;
            this.telefono = values.telefono;
            this.telefonoEmergencia = values.telefonoEmergencia;
            this.contactoEmergencia = values.contactoEmergencia;
            this.nss = values.nss;
            this.rfc = values.rfc;
            this.estadoCivil = values.estadoCivil;
            this.tipoSangre = values.tipoSangre;
            this.registroPatronal = values.registroPatronal;
            this.accesoOtorgado = values.accesoOtorgado;
            this.motivoAcceso = values.motivoAcceso;
            this.empresa = values.empresa;
            this.empresaCredId = values.empresaCredId;
            this.image = values.image;
            this.rutaImagenes = values.rutaImagenes;
            this.biometricoFinal = values.biometricoFinal;
        }
        else {
            this._id = undefined;
            this.nombre = '';
            this.apellidoPaterno = '';
            this.sexo = '';
            this.empresa = [{
                    _id: undefined,
                    nombreEmpresa: '',
                    fechaContrato: '',
                    ocupacion: '',
                    idEmpresa: null
                }];
        }
    }
    PersonaEnrolar.prototype.getQRValue = function () {
        return this.nombre + "|" + this.apellidoPaterno + "|" + this.rfc;
    };
    return PersonaEnrolar;
}());

//# sourceMappingURL=PersonaEnrolar.js.map

/***/ }),

/***/ "../../../../../src/app/models/interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../../../../src/assets/vectorbck.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAGQAlgDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAAECAwQFBggH/8QAQhABAAIBAwIEAgcFBgUCBwAAAAECAwQRMQUhBhJBYVFxBxMUIjKBoVJykbHBFSMzQmLRCBai4fAkoyVDVWVzsvH/xAAaAQEBAQEBAQEAAAAAAAAAAAABAAIDBQQG/8QALREBAQACAgECBAQGAwAAAAAAAAECEQMEEiExBSJBYRMyUXEjJJGh0fCBscH/2gAMAwEAAhEDEQA/APDgB+2fjwAEgAEgnXlBZUxVOsLawrqurHd0kYtTpC/HCukL6R2dcY52rKQvpCvHC+kOsjlanSFsQjSFlYdZHO1OsJxBRBzO0btRnaOS0Vru4fVNVzES2dS1MUrMRKnwl0PN4k61GD71dLi2vqckf5a/CPeeI/OfR83Nya9I+jhw+rt/Rn4Z/tHUx1vqGPfS4rf3FLR2y3j/ADfux+s/J+pyWmwYdNp8enwY648WOsUpSsdqxHEJ7Plj6UC2TmEqU37zwdjSuK7908ePzSnFJtbaG3TYOOzzO33dfJh/V9/W6u/mzLTYPZ0MGH2SwYvZtw4vZ5T0iw4vZrxY/ZLFiaseP2G0jixtFKHSi+tQUa19ltanEbGkAD2G0QM0dFsNjGwWi2Gx7DZIgew2RIbHsNki2Gx7DZAtiSCWkQY2K0RbGFsESRbFFsSRHYICYCRTBJFMEEUwYOwjMEnMIzCREYIREmRBA5giEZCSKBSDB2HxIAHvvHAASAASOFlOVdVtYbgqyi6kK6Quxw3HOrcccL6RwrxwvpHd1xc6sxwvpCFIX0h2xjlalSFtYRpCysOkYoUavLGOk9195isbuF1fVc1iWc8/GNYY+VZrxqOoa/Fo9LjnLmzXimOkesy/a/CnQsHQOjY9Di2tkn7+fJEf4l55n5ekezy/0SeHPqNNPiDWU/vs9ZrpazH4cfrb529Pb5v0B51y3dvumOohMEnMJY8fntt6RyNnW0cdPN3nhKe9vLX81mSfLtSnP8lumw+zzu32tfJj7vv63X382R6bDx2dHBi9i0+JvwYvZ5b0BhxezZixbHhx7Q1Y6ewJY6L6USpRdWoRVqnEbHEHsNotj2MbAgHsES2PYBbOgAewRA9hskQPYbJED2GyRA9iSA2AW1otgYOxoi2S2LZJHYJFsRoimDC2ERMJTBFIgyIKSSBCImACEZgk5hGUiIxJCIkAgik5BCIOQg+IwA/QPGAASAAKSpC6kK6LaQ1GasrHDRjhTWO8NGKHXFzq7HC/HCukNGOHWOVW46rqQhSOy6kOsc6lWE4KsFktFaTMtssnUs8Y8c92fwZ0S/iTxFTBkifseH+81No/Z37V+dp7fxc/q2otkyeSm8zM7REczL9l8A9AjoHh/HgyVj7Xm/vdTP8AqmO1flWO38Xw8/Ju6fZw4am3cpStKVpSsVrWIitYjaIiOIg0ti2fO76KtZtaKx6r8kxhpFa97Tx/unStcGKb35/87KsdbZL+e3M/o+Ltdnwmp7vr6/B5XdPT4pmd57zPMujp8SGnxcdnR0+Ljs8l6SWDF7N2LGjhxtmLGyRio0Y6ClV1apCsJxBxGxg6AGxgjYAAgHsaRbDYwiAAloAbHslogew2S0QPYbJaIDYJaBbGEtFsSQQRB7EkNiMHY0RTBzAQRBzBEESRSUiDKSAikUkEUwYIRkkpKUkZJIpMBEYkwUgAWXxEAH6B4wACQEcg4MSyi6iqi/HDcZq3HDRihTihqxR2dcXKrcccNOOFWOO7Tjjs64uVWUhbWEaQtiHWOdHDn9V1EY8cxu35bRWky811XLfPnjDirN73tFa1jmZntEMcufjG+LHdel+ijok9W8QW6pqKebS6CYtXeO1ss/hj8uf4P2Jy/B/RadB8Pabp0bTlrXz57R/myT3tP9PlDrTDzbluvQk1ENl+kxbz9ZaO0cIYsc5MkUj19fgt12SKVjT4+28fe9ocOflnHjt24uO55KM1/r8vb8Ece/u1abFx2VabHw6Wnx8dni5ZXK7r1ccZjNRbp8Tfhx8IYMbbhoy0lio1UqWOq6lQjpVZEbCI2g2SDgBbOgAYI2MBEAbHsiWx7Hsew2kdj2MBFsewCQ2GwCQ2GwCRbDYwkjsNkhsUhsEti2W0QGwI0UwSRbIEJgBIiSIhEGRBSSRSQiDkiCkkikgikxJCAOSQRByTQKQcgh8QgB+geKAAkEoRSqYltIaMcKKQ044dIxV2KGrFCjFHdqww64ueS/FDTjjtCnFDVjh1jjU6QnECsHadqzLpGGDqub6vFMbtn0S9H/tTxPbqWanm0/T4i8b8Tln8Mfl3n8oee67qPvTG/aH7L9HHRp6L4T0uHJTy6jPH2jP8fNbiPyjaP4vh7Gfrp9vBhqPQ7Emt0mH63NETH3Y7y+S3U3X1SbulmOK6XSWz3j71uI/lDDii2S83tO9rTvMruo5vrtT9XX8GPt859U9Nj47PI7HL55PS4ePwxX6bHw6enx8KNNj4dHBR89dluGnDZiohiptDTSoJ0qurGxVjaEmSDARgOIEQYIAEQjoHEHEGNktjACAPYLZLY9jA2i2BhIAbDZIEewSLYbGEkdgkS2iB7EQWxTCQSQCUwjMFApMEIg5gkCKUiIRByRZIpSlEogJBCIOSIKUZTRkgiMpMBAAh8QgB+heIAAkE68oRysoYl2Npxxwoxw0444dMWMl+GGzFDNijhsxR2dcXKr8UNNIVYY4aaQ7Ryp1hRrskUxTO7TEOR13N5ccxErK6ixm6r8IdN/t7xno9HevmwVv9dn/cp3mPznaPzfv0vzf6DOl+XR6/rWSv3s940+KZ/Zr3t+sxH5P0p5fJlvJ6XHjrFDZryW+x9Om3GXJ2r/57Qho8P12orX05n5KOq5vtGumtfwY/ux8/WXw9rk8cdR9fX493anTUdLTY+GbTU4dPTU4eY+9p09O0Ohgoo09OG7FX0BWY6r6VRpVbHYGGcFBimA4JIEAHCIiDiBEGCADiAhsDAIA2NItj2AR0AD2C0QPYbLZ0QPYbIaIbAFaLYGEiI9ggUwSRTC2iKYMEIzBJTBTBRFJghESAgRScgsolJgwIkkUtQEUmUkEUmDBUZI5JIgJDTL4gAD9C8QABI4TohCzHDSaMbVjhmxNeJ0xc604o4bMUM2GGzDHDri5ZNGKGikK8UL6x2dY50rz5aTLyvXs02vMR39npddfyYZ+Tj+FtF/bHjfpuitHmx21EXyR/op96f5fq482Wo68OO6/bvB/TI6R4Y6f06Y2viwVnJ+/b71v1mXVmEp7zv8RSs2vFK8zO0PL29KRox2+ydNy6n/Pf7tP/AD/zhytPRv6/eIzYtHT8OGu8/Of+382fTU4eVzZ+eW3o8WPjjps01OHT01OGTS0dPTU4ca6tOno2Y6qsNWnHDNSdI2hKAcBoAHAIgwIRghKIEGCADgEGBEBCDARAOIMbJbGAEAew2S0QMI6IGNktED2JAtiSB2kQcwSGikGUwQUkkUpEUmCEJCUolFJJFJZIpMSYKjJJIyRSkkiIRByRBSRyRBSjKcoyQQAQfD4Afo3hgAJHVbjV1W42oq04uGvFyy4oa8XLcc8mvDDdhjsx4Ib8MO0c8l+KOy+sdleOOy7baHSOdczrOTy4p7ux9Bmg+0eIeodTtG9dLgjFWf8AVkn/AGrP8Xm/EGTasw/TvoP0H2fwLbXTG1tdrston41xxWkfr5nw9rPXo+zrYb9Xtphq6XSs6mct/wAGKs3lnXai32foWa8drai8Y4+Xr/V53Nl44Wvv4sd5RybZJ1GpyZ7c5LTZt01eGPT1dPS14eW9Bt01eHT01WLTV4dPT17QyWjFHZfSNoV44XAwQYgCmBIoMEHBQlArRwAcBCDAgEQYCMBxBgEA4gwdFsY2MbJbHsAloAALQGwCWi2BgrSOxJbAjSJTCUwSCIOSKKYBlJZKSSKVEUoykUkIgSGhUQckgUlKUkQiUnIkxlEjKeWoAikUkEUmUkIgTyEnw+AH6N4QABSVV2JTVdj5MFasLZhjuyYeWzFy6RjJtwQ3YYYtPDoYIdY51fjhZedqSWOBqJ2xy2w8t1/JveY9H7/4I0U6D6O/DGmmNrW6fGot88t7X/rD5367abWtEczvEPqnqel+w4Om6GI2jTdPwYdvh5a7f0eT3Mv4mM/f/f7vT6uPyZX9v9/swyPEM+SNHo4/+Xi89o97LcFPrc+PH+1aI/Vh6zk+v6zqbx+Gt/JX5V7PP7WXpI+7rz3qOmrw6mlrwwaarqaaOHxV9Ldpq94dLDHZi0tXQxR2BXUjsmUdoOGSYBwGjAEIw4SKDZIMQYpBlBog4EGKQcQIOAYIgwAQDiANkbDYwERgI6IbGEC2JIltEDmCKKSmEikhEpSkiyiJOSIpEcghEHJEIySUoyYgikUlkiMpMFKSOSIpSUnJEEUmGgiJ4AUZqMgSCnw8AH6N4QABSVV+NRVfj5UTXhbMXox4m3D6OkYrdp/R0MEMGmdDB6Oscq00hVrZ2xSupGzP1GdsMt32Znu8ziw/a/EGg0vP12rxY9v3r1j+r6x8ZRt1n2+qr/V8u+DMf2j6R/D2GY3i3VNPH/uVn+j6m8aV/wDi1J+OGP5y8Pt5fzGM+1/8ex1cf4GV+8cvpW0a6uS3GOtsk/lEy8/imcl5vPNpm0/n3d2k/VaDX5fWunmsfO0xDiaeO8Ph7F3m+zgmsW/TR3h1NPHDn6WOHT08cPnrs6Gmjh0MUcMWmjhvxx2ZqTOOCMNA44JIEHBJQK0cACOQjMCATAOAYYgHAJmUGGgcQIMEACIBA2M9kS2Gx7DZIti2S2GySIMphAFMGEEQckUSMpSUtMkikUmAiMpIIkkZ5UAlGUkZaBFJgioieAFBSRSKeSzSnhFJFoFIEggp5I5IwUpAkEPh0AP0bwgACk6rsaiq/Goq2YvRswseFtxcOkYrdp3Rwejn6b0dHBw64udaqsnVJ/uZbKcMXVf8KWr7Mz3Yvo4jf6VfDUf/AHPDP/U+pPGtf/V6e/xxzH8J/wC75a+jifL9KnhqZ/8AqeGP+p9W+Nab4dLk24tav8Yif6Pz/duu1h+1e51JvrZ/u8vrp8nQ9VP7eTFT9Zn+jk6aHS6tO3Rqx+1qo/Sk/wC7n6Z8fL+evp4/yx0dLDp6aO8OdpY4dPTR3cXR0tNHDbThk00cNkcCmHHJlBimHHJlBgiOUoRhKBWjOCOOBSZwRhBJGEhWhCUFBwKYYBwy0DABEHAShEACIG0AYB0QMpg7GgikJKQkGSBEkUqAiMpaCMiTkiyiJ4AaFIpMp4QIpMpIRkCeQ0KjPIOeSQKeSk55KSyRSZTy0CkjkjAUkckQUg5BD4cAD9G8IAApKq/GoquxqJswt2FgwejdhbjFb9N6Olp3M0zp6eezrHOtlOGLqv8AhS20ZeqRvjlq+zM93F8G5fs/0jeHs0z2p1TTz/7lYfYHi3H9Z0ibbf4eStv6f1fF+PN9k69odVvt9TqsWTf928T/AEfbvVsX1/TNTjjvNsczHz5h+c+KXw5uPJ7/AMO+bizxfnPW+3TtPHx1Fp/6YYtN6NnXJ/8ARab/APNef+mrHpvR83J+eu+H5Y6em4h1NLy5mm4h09K5NR09N6NccMmm9GuBWocGUGK1DgygwYcJRwjCUcCkGSTNIgyjk0Tgyg2aTjhKOEYSgUg44IxWjEA44BODKODBEGDgEbDYwNktiSKSEZBkRSlGUp4KSiKeDKUyQngCSKjPBHJNClPJHJEUiOeQWUSkxPBCMkck0KUkckgUlPByUkEUmUmMlPBHPBNQUp4I54IgTwBPAIfDgAfo3hAAFJVXY1NVtOUmvC24WHC24W4zXQ0893S03DlYJ7w6emnh0jnXRx8M/UY3xSvxcQr1kb4pb+jLw/WomJtMc7Ts+3/DerjqHhzput33jU6TFl+fmpE/1fFHWq/el9ZfQXrv7Q+ifoGWbea2LTfZ7e047TT+UQ/P/Gsfkxy+/wDv/T3PhOXzZY/Zx/FOKcExgmP8PUXj9I2c7TPRfSRg+q1GLLEdstot+e0xP8oeb00vg8vL5n1+PjdOtpp4dPSy5Omnh09LLJdbTTw2RwwaaeG6k9gYlBlBitQ4MoMGHCUIwlHApCSKTNMEcmUcmicGUGzScJIwlArUCSJikzjgjjgFKOAUcGKTOCOATAAIKTKUiIyIpTwU8HPBS0CAKUKQkCSzUZI5JoUpI5IilPIE8gsoieAJ4IRkjkmhSkjkkCkpOSkgikykxkpI54JqClPBHPBECeAJ4BD4cAD9G8IABI6rqKaraGJqxctmFjxNeFqM1uwz3h0tLPDl4XR0s8OkYrq4Z7HqY3xyhgntC7JG+OXRh5DrlPxP3z/hP6lGo8EdQ6ZM730Wvm0R8K5KxaP1iz8N61j/ABPef8KvVfsfjjqPSb22prtH56x8b4rb/wD62t/B5XxPj8+DL7er0vh2fjzT7+j9z+kjSzm6DXUVjedPli0/uz2n+cPA6eeH61r8OPV6PNpcv4MtJpP5w/JPq76fPkwZY2vjvNLfOJ2fnuC+mnt809durpp4dPSy4+lt2h09LZ1cnY008N+Oe0OZprN+K3YUxog0aSkKYcGUGCcJRwhCUCtGZHHDNJwZGicGjCQpOOEo4Rg4ZpM44I4FaMQADEoNFJEQZCJZKW43ILSPcgUykJAEmApRkyKBTwZSmSE8ApaFKeCOSLNKeSAIpEZTwQRSZSQUkJ5DQpSRzySBSU8HPJSWSKTKeWoCngjkjAU8EckQJ4AkEPhwAP0bwgAEkqrKK6rKGJpx+jXhY8TXhlqMtuJ0NNPDnYW7TS6Riurgnhq5qxYJ4a6T2bjDj9Yx7xPZj+j7q3/L30idG6pNvLjxautcs/6L/ct+lnV6nTekvIdVxbXnbt7/AAcebCZS436u3FlcbLPo+5L2787vA+OdH9n6xXV1j7mprvP78dp/TaXV+jXrkeIPAnSOqTbzZcmnrTN7ZKfdt+sfq2+J9H9v6Tlx1jfLj/vMfzj0/ON4fj5jePOyv1NynJhuPGaazp6a3eHE0t+HU09+HauDtaa3d0MNuzkaa/Do4LCp0Mc8LGbHZorO4rUSjk0UgRHKUIpQK0ZwQjkJI4IQCaSJwK0cJQicAxIFBsmGZQYIgyESmkwie6Rgtz3GkAW43SNEFMlCQAgRHJGAEJKTAUiQUlkhPAKWhQUmjPKgBTyaMkFIAaFRnkAIFPJSZTyWaRSaLQEkJBBSRyRFKQJBD4dAD9G8IABJKE6K6rKlNGKWrEx45a8UtQNuGW3TztLn4ZbcM8Nxiupgt2bMc9nOwWbcVu0NxijWV81JeV6vi57PW5fvUcDquLeJ7DOHF+of8L3XfNouqeHMt++K8arBE/s27Wj+MRP5v2m13yP9G/W58N+Pen9Qtby4LZPqc/w8l+0/wnafyfWPni1YtWd4mN4l+a+IcPjy+U+r9B0eXy4/H9HjOv6T7D1W/kjbFm/vKe2/MflJaa/D0HiLSfbdBbyRvlxffp7/ABj84eW02Th8s9nfKeruaa/Dpae/Dh6XI6envwqHWxWasc9nPw37Q1YrJpqOOEKynDJM4IQinAKDZJmUGCYKDRiQgoNkpGjBwKTOJIBpIFEgIxuAjs9xuQSPctwEgASRlMiZIgAFJARk5IihE5IwAhILJEckYhKMnKMmAFJlJFITwCkwUInJFmieETkiCkANAp5IBQUpBSCHw8AH6N4QACRwnRXHKypS6ktOKWXG0Y5IrbhlrxSw4pa8Utxmujgtw2YrObhttLbis3GG2J3rs5vUce8S3Ut2UayvmrJojx/UsW1pfTH0QeIv+YPBGky5b+bVaaPqM/x81e2/5xtP5vnXqeLns9Z9BPiH+x/FV+mZ7+XTa+No3ntGSOP4x/KHnd3h/E4/T3j7+py+Gf7vou1nlet6X7LrvrKRtiyzvHtPrH9XpLWZOoYa6rTWw27TPes/CfSXhaexa4umyd4dPTZOO7h4ptjyTjvG1qztMOjpsnATuae7biu5GnycN+G4MdKlltZZMVuzRSQ1FwKs7wYMOEkISgUmZHApMyEBGcEA0kcSQCSiTRiTGiYLcwdnuNyC0TNELSMbkFpHuQCWwC3BAkpkTJEbBSJIgAFJAIylAgCkgpISGkETkkyCOSIKSEiTGSkpBSYgUmUtMkJ4BSYKUgp5CT4fAD9G8IABIRynVCEoKW0aMcs1ZXY5IrXjlrwyw45acVmoK347NmKznY7NWK7cYsdCljy/eqz47LotvDQcrqGPeJ7OFe2XS6rHqMFpplxXi9LR6TE7w9Nq67xLg6/F3lzzjeNfSngTr+LxB4Z0uvpMeeaRGSu/4bR2mP4xLtWs/AvoT8Rz0nrl+lai+2n1Xem/pf1j84jf8vd+7zfeN4nd4PY4fw8/s9ng5fPD7uf1jBvP2mkd47X94+LPpcjqXtExMT3hx8+P7Pn2j8E96/7Pmzx16voxv0dfT5Pd0cGTty4WmyOjpsvHdyajs4btWOzmYcnu2Yb9k03Usthlx2XUsyVhwQhFOAUGyTg0TgE4MhEomcSQBSBRJhHuaIR2lue6O43GkkEQtFIbojdaB7gtyK2e5AIApkTJHSABTJGxMgFKAkgChKMnKJgABSRSAEoFJSaMlkFJk0CI5IwBE5IgFJyjJBABDb4fAD9G8MABIJQicJLKraT3U1W0kpopLRjlkpK/HZqMtuKzTjsw47NOOzTNjdjuurZipZdS7UGlubvVyddj33dSZ3hj1Nd4lX1UcC9smn1FM+G80yY7Ralo9Jid4l9D/R34ix9e8P4cu8RmpXy3rvxMdpj8v5TD8A1mPns7X0b+IMnQev0pe+2m1Forbee0W4iflPE/l8Hydji/Ex19X1cPJ4ZbfQ9rKNRWuWk0t+U/BHDnpnw1zY53paN4K13leP0r0fL6xmw2tjvNLdph0NPl4c/PHm+9H4oS0+V8vJhca74ZeUd/T5e0d27DkcTTZeO7oYMjm6Ovju0Us52HI1Y7hqNtLbwmzUsvrYJKEolE4DSQKJMIzROJBOJMgkYLc0dnuaIGikET3WkYLcbjSMFuN1pGEQdI9yAQ2AW4KEgFMoCSAKBSJkpkgpABFKSAQBSJBBSQBjJSRlJRAFLQEkAoKUoyckQAUgh8QAB+ieGAAkDggUlCysq4TqktpK+ks1Z7raSRWull+OzJSy6lmoG2ll1bMWO66lyzWuLK8veEa2OZ7EMGrpvu5WoptMu3njdzdTTlmtx+pfRP4onWaL+zdXk3zYtq7zPPpFvz4n3j3foFrPmrpeuzdM6jj1mD8VJ+9Xf8VfWH7x4X61h6v0zHmpk81vLE7+sx8fn6T7vh5+L18o+zh5fTxrs2sr821t4/NG1lVrvly45lNV9EzuN26Wny8d3S0+X3edwZvLbaZdLT5uO7z+TC4XVfZhnMpuO/hyNuHJv6uJp8u/q34cjDo6uO7RS7nYsm/q047gt1bJM9Lra2BWRJxKIiQUwUSYRxIILRSBbgI9z3IJGCCJgtxukYLcJGNyCA3AJIyG5LSOZIAgFMiZRmSjmSAIBSJkkAJBGCgpEkRQUnKJAISDACkSRAKTRkgSQKUACDQfEIAfoXiAAJAAJJQcSjBxJSyJWVlTCyslL6WXVsy1lbWyDVWy2tmWtllbNShrrdOLMtbJxYjSzJ3hjz1aZspy91VHNz17u74E6/k6P1GuG99sGS3bee1bT8faeJ/KXIzV5ZMlWLG4+idNqseq09c2Kfu29PWJ9YlK1n5j9Hnia2OfsWqvMzEbTvzasevzj9Yfo31kWrFomJiY3iY4l8mfH437Ppw5PKJ2u06PVfeilp7+k/Fz7WQtbZx5OGck1XTDluF3HqdPm47ujgze7ynT9d5pjHkna3pPxdrT5vd5XJx5ceWq9HDOZzcd7Dl923Fk3cTBm927DlYdHWx3X0u5uLJv6tOO4LfWycMtLrq2CWHEoxO5opbmhuY0UgW5hDc9yCR7ggtFIIgaSREFpHuNyB0huAN0AC3LdI9ymS3B0gAUkbMpIIAAiNggSAAKWgCkEYAAUkEAJUVKUZOSIBCSMAAkEPiEAP0LxAAEgAEhBkcFJRKUShCUJLIlOtlMJxJTRWydbM9ZTiyDRFk4szxZKLHYaIsVp3hV5h5ikckMuWrVZTkhmmM2PJkw5q5cVppek71mPSX6d4I8R49Xp66fPaKzvttv8Agt8PlPo/MrwnodVl0WprmxfK1fS0fCRqX0p9Z6x+7Wsqtd5/wv13Hr9NjxWvvfbakzzP+mfeP1dq1nK4XG6rpM5lNpWs6vS+pb2jDmttb/LafX/u4lrK7Wc+Xgx5cdVvj5rx3ce90+b3dDBm93hukdX8kxh1Vu3Fck+nz/3em0+fju8Xm4cuLLWT1eLlx5JuPQYcvu2Ysrh4M27bhyuTs7GPIvpdzMWX3aseQHbfS6yJ3Y6XXUuNJoCFbpx3R2Nz3IJHue6I3Gilue6G57rSS3G6O43WkluN0dxutI9xujuFpHuNyC0huACNgFuSBzJAJATJTII2CEySAAKSBJApKABS0BJAIApElJBAFJBACSCkAEPiIAP0DxQAEgAEgAEjg4RNJJKJQPcpZEpRZVEpblLYslFlMScWQXxY/Mp3OLJaWzbshaUfMJlJC8KrQtsrsi0dL12TQ6iL1mZpMx5oif1j3fpnQesY+oYK1teJy7bxP7cfH5/GH5RMNvSeoZNFmiYtaKb79uaz8Yallnjkzdy7j9btZVazm9I6pTXYYibV+t237cWj4w2WsLhZdVTKWbiVrOj0frN9JaMWeZvg9J9af7x7ORayq1mc+HHkx8co1hy5cd3i/S9JqqZcdcmO8XpaN4mJ7S6ODO/LuldV1HTsu9J8+KZ+9jme0+8fCXtuk9T0+uwxlwZN9vxVnms/CYeF2ennwXfvHr9ftY8s19XqcOb3a8WX3cHBn927Dn93yPqdrHl92il3JxZfdqxZQXTpdZWzDjyr6XRa4se6itlkWGksCMSe6RgtxuiYLcbpbMFuN0tmC3G6BluQSPcgEgBuW50NnuQLdIymSBGwBMkQCBICQA0giAgBImUZIEkBKBSQDQBCQRQCkIPiMAP0DxgAEgAEgAEgAEjg0T3KPdLdDc4lJLc90NxuksiT3V7nuUnuN0NxuEnMoz3LcTJSMoylJSE3dI6jk0eWsTa31e+8THNZ+MPedN6jTV4o3mPrNt+3Fo+MPzRu6X1C+kyREzb6vfftzWfjDrhnL8uTnljZ64v0a1lVrMWg19NTjrvaPNMbxMcWX2s6eOnPy2layWl1mfR5659PknHePWPX2n4wz2srtY+Ms1R5WXcfoXh7xJg1/lwZpjDqf2Zntf8Adn+j0uHN7vxO19uJem8PeLsmmmun6nNsmLiM0d7V+fxj9fm8ft/C7Pm4v6f4ep1viEvy8v8AV+pYc/u2Yc0T6vPaLWYs+GmbDlrkx2jetqzvEt+LN7vFsserK7uPL7tOPL7uJiz+7Ziz+6O3XplXVye7l480fFopk90XQrdZFmKmT3W1ye4W2kKq3Tiy0tpAtxutLZgtxutLZgtxutLZjcglsbghugZbkCtjcAt1oGUyCKAmSmQdAAFMlCSAQAmRMozJAmSASBAiyBIkmhQUmigAAQ+JAA9944ACQACQACQACQACQPcgke43IFHuNyCR7jcgEe43IFHuJ2IJAABNfTtdk0l9u9sczvNfh7w9ZotfTUYqz54mJ4t8fn7vENGi1eXS5PNSd6z+Ks8S7cfJr0y9nLPj36z3e3tZVa7Foddj1GKLVtvHrE819pX2s+qR81qVrK7WRtZCZ3bkZtdLovWtd0nP59Lk3pM/fxW70t+XpPvD9G8OeJtF1WsUpb6nU7d8N57/AJT6w/Jzra1bRaszW0TvExO0xL4+10OPsevtf1/y+rrd3k4PT3n6P3nDn92vFm935T4e8Z59P5cHVItnx8RmrH36/OP838/m9907qGDV4K59NnplxW4tWd//AOPzfZ6nL17rOen6/R73B2ePnny3/h6PFm92nHm93DxZ2rFn93y6fQ7ePM0UyuPjze7Rjze60tutXJHxWVye7m48vuvplWlt0K3Si0MdMnutrdHbRuN1VbJxKW0txuQWhs9yA3WkAW43OkZbkEjIbkdA9yASAKZIg5kgFpbAmSmSmSBMkAgCBEASJIoAFJZEkCkgSCmQU//Z"

/***/ }),

/***/ "../../../../dijkstrajs/dijkstra.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "../../../../ngx-qrcode2/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxQRCodeModule; });
/* unused harmony export NgxQRCodeComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");



var QRCode = __webpack_require__("../../../../qrcode/lib/browser.js");
var NgxQRCodeComponent = (function () {
    /**
     * @param {?} renderer
     */
    function NgxQRCodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'url';
        this.cssClass = 'qrcode';
        this.value = 'https://www.techiediaries.com';
        this.version = '';
        this.errorCorrectionLevel = 'M';
    }
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.ngOnChanges = function () {
        this.createQRCode();
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    //console.log(url);
                    resolve(url);
                }
            });
        });
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toCanvas = function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxQRCodeComponent.prototype.renderElement = function (element) {
        for (var _i = 0, _a = this.qrcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.createQRCode = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        
        var /** @type {?} */ element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    //console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    //console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    return NgxQRCodeComponent;
}());
NgxQRCodeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: 'ngx-qrcode',
                template: "<div #qrcElement [class]=\"cssClass\"></div>",
                styles: []
            },] },
];
/**
 * @nocollapse
 */
NgxQRCodeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */], },
]; };
NgxQRCodeComponent.propDecorators = {
    'elementType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['qrc-element-type',] },],
    'cssClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['qrc-class',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['qrc-value',] },],
    'version': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['qrc-version',] },],
    'errorCorrectionLevel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['qrc-errorCorrectionLevel',] },],
    'qrcElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['qrcElement',] },],
};

var NgxQRCodeModule = (function () {
    function NgxQRCodeModule() {
    }
    /**
     * @return {?}
     */
    NgxQRCodeModule.forRoot = function () {
        return {
            ngModule: NgxQRCodeModule,
            providers: []
        };
    };
    return NgxQRCodeModule;
}());
NgxQRCodeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
                ],
                declarations: [
                    NgxQRCodeComponent,
                ],
                exports: [
                    NgxQRCodeComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxQRCodeModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "../../../../ngx-typeahead/modules/ngx-typeahead.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxTypeaheadModule; });
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concat__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");












var Key = {};
Key.Backspace = 8;
Key.Tab = 9;
Key.Enter = 13;
Key.Shift = 16;
Key.Escape = 27;
Key.ArrowLeft = 37;
Key.ArrowRight = 39;
Key.ArrowUp = 38;
Key.ArrowDown = 40;
Key[Key.Backspace] = "Backspace";
Key[Key.Tab] = "Tab";
Key[Key.Enter] = "Enter";
Key[Key.Shift] = "Shift";
Key[Key.Escape] = "Escape";
Key[Key.ArrowLeft] = "ArrowLeft";
Key[Key.ArrowRight] = "ArrowRight";
Key[Key.ArrowUp] = "ArrowUp";
Key[Key.ArrowDown] = "ArrowDown";
/**
 * @param {?} keyCode
 * @return {?}
 */
function validateNonCharKeyCode(keyCode) {
    return [
        Key.Enter,
        Key.Tab,
        Key.Shift,
        Key.ArrowLeft,
        Key.ArrowUp,
        Key.ArrowRight,
        Key.ArrowDown
    ].every(function (codeKey) { return codeKey !== keyCode; });
}
/**
 * @param {?} keyCode
 * @return {?}
 */
function validateArrowKeys(keyCode) {
    return keyCode === Key.ArrowDown || keyCode === Key.ArrowUp;
}
/**
 * @param {?} index
 * @param {?} currentIndex
 * @return {?}
 */
function isIndexActive(index, currentIndex) {
    return index === currentIndex;
}
/**
 * @param {?} query
 * @param {?=} jsonpCallbackParamValue
 * @param {?=} queryParamKey
 * @param {?=} customParams
 * @return {?}
 */
function createParamsForQuery(query, jsonpCallbackParamValue, queryParamKey, customParams) {
    if (jsonpCallbackParamValue === void 0) { jsonpCallbackParamValue = 'JSONP_CALLBACK'; }
    if (queryParamKey === void 0) { queryParamKey = 'q'; }
    if (customParams === void 0) { customParams = {}; }
    var /** @type {?} */ searchConfig = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
    var /** @type {?} */ searchParams = Object.assign((_a = { callback: jsonpCallbackParamValue }, _a[queryParamKey] = query, _a), customParams);
    var /** @type {?} */ setParam = function (param) { return searchConfig.set(param, searchParams[param]); };
    var /** @type {?} */ params = Object.keys(searchParams).forEach(setParam);
    return searchConfig;
    var _a;
}
/**
 * @param {?=} method
 * @return {?}
 */
function resolveApiMethod(method) {
    if (method === void 0) { method = ''; }
    var /** @type {?} */ isMethodValid = [
        'get',
        'post',
        'put',
        'delete',
        'patch',
        'request'
    ].some(function (methodName) { return method === methodName; });
    var /** @type {?} */ apiMethod = isMethodValid ? method : 'get';
    return apiMethod;
}
/**
 * @param {?} currentIndex
 * @param {?} stepUp
 * @return {?}
 */
function resolveNextIndex(currentIndex, stepUp) {
    var /** @type {?} */ step = stepUp ? 1 : -1;
    var /** @type {?} */ topLimit = 9;
    var /** @type {?} */ bottomLimit = 0;
    var /** @type {?} */ currentResultIndex = currentIndex + step;
    var /** @type {?} */ resultIndex = currentResultIndex;
    if (currentResultIndex === topLimit + 1) {
        resultIndex = bottomLimit;
    }
    if (currentResultIndex === bottomLimit - 1) {
        resultIndex = topLimit;
    }
    return resultIndex;
}
var NgxTypeAheadComponent = (function () {
    /**
     * @param {?} element
     * @param {?} viewContainer
     * @param {?} jsonp
     * @param {?} http
     * @param {?} cdr
     */
    function NgxTypeAheadComponent(element, viewContainer, jsonp, http, cdr) {
        this.element = element;
        this.viewContainer = viewContainer;
        this.jsonp = jsonp;
        this.http = http;
        this.cdr = cdr;
        this.showSuggestions = false;
        this.taUrl = '';
        this.taParams = {};
        this.taQueryParam = 'q';
        this.taCallbackParamValue = 'JSONP_CALLBACK';
        this.taApi = 'jsonp';
        this.taApiMethod = 'get';
        this.taSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.suggestionIndex = 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.handleEsc = function (event) {
        if (event.keyCode === Key.Escape) {
            this.hideSuggestions();
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.ngOnInit = function () {
        var /** @type {?} */ onkeyDown$ = this.onElementKeyDown();
        this.subscriptions = [
            this.filterEnterEvent(onkeyDown$),
            this.listenAndSuggest(),
            this.navigateWithArrows(onkeyDown$)
        ];
        this.renderTemplate();
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.length = 0;
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.renderTemplate = function () {
        this.viewContainer.createEmbeddedView(this.suggestionsTplRef);
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.onElementKeyDown = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(this.element.nativeElement, 'keydown').share();
    };
    /**
     * @param {?} elementObs
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.filterEnterEvent = function (elementObs) {
        var _this = this;
        return elementObs
            .filter(function (e) { return e.keyCode === Key.Enter; })
            .subscribe(function (event) {
            event.preventDefault();
            _this.handleSelectSuggestion(_this.activeResult);
        });
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.listenAndSuggest = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(this.element.nativeElement, 'keyup')
            .filter(function (e) { return validateNonCharKeyCode(e.keyCode); })
            .map(function (e) { return e.target.value; })
            .debounceTime(300)
            .concat()
            .distinctUntilChanged()
            .filter(function (query) { return query.length > 0; })
            .switchMap(function (query) { return _this.suggest(query); })
            .subscribe(function (results) {
            _this.results = results;
            _this.showSuggestions = true;
            _this.suggestionIndex = 0;
            _this.cdr.markForCheck();
        });
    };
    /**
     * @param {?} elementObs
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.navigateWithArrows = function (elementObs) {
        var _this = this;
        return elementObs
            .filter(function (e) { return validateArrowKeys(e.keyCode); })
            .map(function (e) { return e.keyCode; })
            .subscribe(function (keyCode) {
            _this.suggestionIndex = resolveNextIndex(_this.suggestionIndex, keyCode === Key.ArrowDown);
            _this.showSuggestions = true;
            _this.cdr.markForCheck();
        });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.suggest = function (query) {
        var /** @type {?} */ url = this.taUrl;
        var /** @type {?} */ searchConfig = createParamsForQuery(query, this.taCallbackParamValue, this.taQueryParam, this.taParams);
        var /** @type {?} */ options = {
            search: searchConfig
        };
        var /** @type {?} */ apiMethod = resolveApiMethod(this.taApiMethod);
        var /** @type {?} */ isJsonpApi = this.taApi === 'jsonp';
        var /** @type {?} */ responseTransformMethod = this.taResponseTransform || (function (item) { return item; });
        return isJsonpApi
            ? this.jsonp[apiMethod](url, options)
                .map(function (response) { return response.json()[1]; })
                .map(function (results) { return results.map(function (result) { return result[0]; }); })
            : this.http[apiMethod](url, options)
                .map(function (response) { return response.json(); })
                .map(function (results) { return results.map(responseTransformMethod); });
    };
    /**
     * @param {?} index
     * @param {?} result
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.markIsActive = function (index, result) {
        var /** @type {?} */ isActive = isIndexActive(index, this.suggestionIndex);
        if (isActive) {
            this.activeResult = result;
        }
        return isActive;
    };
    /**
     * @param {?} suggestion
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.handleSelectSuggestion = function (suggestion) {
        this.hideSuggestions();
        this.taSelected.emit(suggestion);
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.hideSuggestions = function () {
        this.showSuggestions = false;
    };
    /**
     * @return {?}
     */
    NgxTypeAheadComponent.prototype.hasItemTemplate = function () {
        return this.taItemTpl !== undefined;
    };
    return NgxTypeAheadComponent;
}());
NgxTypeAheadComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */], args: [{
                selector: '[ngxTypeahead]',
                styles: [
                    "\n  .typeahead-backdrop {\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n  }\n  "
                ],
                template: "\n  <ng-template #suggestionsTplRef>\n  <section class=\"list-group results\" *ngIf=\"showSuggestions\">\n    <div class=\"typeahead-backdrop\" (click)=\"hideSuggestions()\"></div>\n    <button type=\"button\" class=\"list-group-item\"\n      *ngFor=\"let result of results; let i = index;\"\n      [class.active]=\"markIsActive(i, result)\"\n      (click)=\"handleSelectSuggestion(result)\">\n      <span *ngIf=\"!taItemTpl\"><i class=\"fa fa-search\"></i> {{ result }}</span>\n      <ng-template\n        [ngTemplateOutlet]=\"taItemTpl\"\n        [ngTemplateOutletContext]=\"{ $implicit: {result: result, index: i} }\"\n      ></ng-template>\n    </button>\n  </section>\n  </ng-template>\n  "
            },] },
];
/**
 * @nocollapse
 */
NgxTypeAheadComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Jsonp */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */], },
]; };
NgxTypeAheadComponent.propDecorators = {
    'taItemTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taQueryParam': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taCallbackParamValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taApi': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taApiMethod': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taResponseTransform': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'taSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */] },],
    'suggestionsTplRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */], args: ['suggestionsTplRef',] },],
    'handleEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['keydown', ['$event'],] },],
};
var NgxTypeaheadModule = (function () {
    function NgxTypeaheadModule() {
    }
    return NgxTypeaheadModule;
}());
NgxTypeaheadModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */], args: [{
                declarations: [NgxTypeAheadComponent],
                exports: [NgxTypeAheadComponent, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */]],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
NgxTypeaheadModule.ctorParameters = function () { return []; };
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-typeahead.es5.js.map


/***/ }),

/***/ "../../../../qrcode/lib/browser.js":
/***/ (function(module, exports, __webpack_require__) {

var QRCode = __webpack_require__("../../../../qrcode/lib/core/qrcode.js")
var CanvasRenderer = __webpack_require__("../../../../qrcode/lib/renderer/canvas.js")
var SvgRenderer = __webpack_require__("../../../../qrcode/lib/renderer/svg-render.js")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var argsNum = arguments.length - 1
  if (argsNum < 2) {
    throw new Error('Too few arguments provided')
  }

  if (argsNum === 2) {
    cb = text
    text = canvas
    canvas = opts = undefined
  } else if (argsNum === 3) {
    if (canvas.getContext && typeof cb === 'undefined') {
      cb = opts
      opts = undefined
    } else {
      cb = opts
      opts = text
      text = canvas
      canvas = undefined
    }
  }

  if (typeof cb !== 'function') {
    throw new Error('Callback required as last argument')
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})

/**
 * Legacy API
 */
exports.qrcodedraw = function () {
  return {
    draw: exports.toCanvas
  }
}


/***/ }),

/***/ "../../../../qrcode/lib/core/alignment-pattern.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__("../../../../qrcode/lib/core/utils.js").getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "../../../../qrcode/lib/core/alphanumeric-data.js":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "../../../../qrcode/lib/core/bit-buffer.js":
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "../../../../qrcode/lib/core/bit-matrix.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "../../../../qrcode/lib/core/byte-data.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")
var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "../../../../qrcode/lib/core/error-correction-code.js":
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__("../../../../qrcode/lib/core/error-correction-level.js")

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "../../../../qrcode/lib/core/error-correction-level.js":
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "../../../../qrcode/lib/core/finder-pattern.js":
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__("../../../../qrcode/lib/core/utils.js").getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "../../../../qrcode/lib/core/format-info.js":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("../../../../qrcode/lib/core/utils.js")

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "../../../../qrcode/lib/core/galois-field.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")

var EXP_TABLE = new Buffer(512)
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "../../../../qrcode/lib/core/kanji-data.js":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")
var Utils = __webpack_require__("../../../../qrcode/lib/core/utils.js")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "../../../../qrcode/lib/core/mask-pattern.js":
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "../../../../qrcode/lib/core/mode.js":
/***/ (function(module, exports, __webpack_require__) {

var Version = __webpack_require__("../../../../qrcode/lib/core/version.js")
var Regex = __webpack_require__("../../../../qrcode/lib/core/regex.js")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!Version.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "../../../../qrcode/lib/core/numeric-data.js":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "../../../../qrcode/lib/core/polynomial.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")
var GF = __webpack_require__("../../../../qrcode/lib/core/galois-field.js")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ "../../../../qrcode/lib/core/qrcode.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")
var Utils = __webpack_require__("../../../../qrcode/lib/core/utils.js")
var ECLevel = __webpack_require__("../../../../qrcode/lib/core/error-correction-level.js")
var BitBuffer = __webpack_require__("../../../../qrcode/lib/core/bit-buffer.js")
var BitMatrix = __webpack_require__("../../../../qrcode/lib/core/bit-matrix.js")
var AlignmentPattern = __webpack_require__("../../../../qrcode/lib/core/alignment-pattern.js")
var FinderPattern = __webpack_require__("../../../../qrcode/lib/core/finder-pattern.js")
var MaskPattern = __webpack_require__("../../../../qrcode/lib/core/mask-pattern.js")
var ECCode = __webpack_require__("../../../../qrcode/lib/core/error-correction-code.js")
var ReedSolomonEncoder = __webpack_require__("../../../../qrcode/lib/core/reed-solomon-encoder.js")
var Version = __webpack_require__("../../../../qrcode/lib/core/version.js")
var FormatInfo = __webpack_require__("../../../../qrcode/lib/core/format-info.js")
var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")
var Segments = __webpack_require__("../../../../qrcode/lib/core/segments.js")
var isArray = __webpack_require__("../../../../qrcode/node_modules/isarray/index.js")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  // Find best mask pattern
  var maskPattern = MaskPattern.getBestMask(modules,
    setupFormatInfo.bind(null, modules, errorCorrectionLevel))

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel)
}


/***/ }),

/***/ "../../../../qrcode/lib/core/reed-solomon-encoder.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../qrcode/lib/utils/typedarray-buffer.js")
var Polynomial = __webpack_require__("../../../../qrcode/lib/core/polynomial.js")

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "../../../../qrcode/lib/core/regex.js":
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+-./:]+'
var kanji = '(?:[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|' +
  '[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|' +
  '[\u2010\u2015\u2018\u2019\u2025\u2026\u201C\u201D\u2225\u2260]|' +
  '[\u0391-\u0451]|[\u00A7\u00A8\u00B1\u00B4\u00D7\u00F7])+'
var byte = '(?:(?![A-Z0-9 $%*+-./:]|' + kanji + ').)+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "../../../../qrcode/lib/core/segments.js":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")
var NumericData = __webpack_require__("../../../../qrcode/lib/core/numeric-data.js")
var AlphanumericData = __webpack_require__("../../../../qrcode/lib/core/alphanumeric-data.js")
var ByteData = __webpack_require__("../../../../qrcode/lib/core/byte-data.js")
var KanjiData = __webpack_require__("../../../../qrcode/lib/core/kanji-data.js")
var Regex = __webpack_require__("../../../../qrcode/lib/core/regex.js")
var Utils = __webpack_require__("../../../../qrcode/lib/core/utils.js")
var dijkstra = __webpack_require__("../../../../dijkstrajs/dijkstra.js")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "../../../../qrcode/lib/core/utils.js":
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "../../../../qrcode/lib/core/version.js":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("../../../../qrcode/lib/core/utils.js")
var ECCode = __webpack_require__("../../../../qrcode/lib/core/error-correction-code.js")
var ECLevel = __webpack_require__("../../../../qrcode/lib/core/error-correction-level.js")
var Mode = __webpack_require__("../../../../qrcode/lib/core/mode.js")
var isArray = __webpack_require__("../../../../qrcode/node_modules/isarray/index.js")

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!exports.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!exports.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "../../../../qrcode/lib/renderer/canvas.js":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("../../../../qrcode/lib/renderer/utils.js")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = (qrData.modules.size + opts.margin * 2) * opts.scale

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts.margin, opts.scale, opts.color)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "../../../../qrcode/lib/renderer/svg-render.js":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("../../../../qrcode/lib/renderer/utils.js")

function getColorAttrib (color) {
  return 'fill="rgb(' + [color.r, color.g, color.b].join(',') + ')" ' +
    'fill-opacity="' + (color.a / 255).toFixed(2) + '"'
}

exports.render = function render (qrData, options) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = (size + opts.margin * 2) * opts.scale

  var xmlStr = '<?xml version="1.0" encoding="utf-8"?>\n'
  xmlStr += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

  xmlStr += '<svg version="1.1" baseProfile="full"'
  xmlStr += ' width="' + qrcodesize + '" height="' + qrcodesize + '"'
  xmlStr += ' viewBox="0 0 ' + qrcodesize + ' ' + qrcodesize + '"'
  xmlStr += ' xmlns="http://www.w3.org/2000/svg"'
  xmlStr += ' xmlns:xlink="http://www.w3.org/1999/xlink"'
  xmlStr += ' xmlns:ev="http://www.w3.org/2001/xml-events">\n'

  xmlStr += '<rect x="0" y="0" width="' + qrcodesize + '" height="' + qrcodesize + '" ' + getColorAttrib(opts.color.light) + ' />\n'
  xmlStr += '<defs><rect id="p" width="' + opts.scale + '" height="' + opts.scale + '" /></defs>\n'
  xmlStr += '<g ' + getColorAttrib(opts.color.dark) + '>\n'

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (!data[i * size + j]) continue

      var x = (opts.margin + j) * opts.scale
      var y = (opts.margin + i) * opts.scale
      xmlStr += '<use x="' + x + '" y="' + y + '" xlink:href="#p" />\n'
    }
  }

  xmlStr += '</g>\n'
  xmlStr += '</svg>'

  return xmlStr
}


/***/ }),

/***/ "../../../../qrcode/lib/renderer/utils.js":
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  return {
    scale: options.scale || 4,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.qrToImageData = function qrToImageData (imgData, qr, margin, scale, color) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scaledMargin = margin * scale
  var symbolSize = size * scale + scaledMargin * 2
  var palette = [color.light, color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc]]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "../../../../qrcode/lib/utils/typedarray-buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__("../../../../qrcode/node_modules/isarray/index.js")

var K_MAX_LENGTH = 0x7fffffff

function Buffer (arg, offset, length) {
  if (typeof arg === 'number') {
    return allocUnsafe(arg)
  }

  return from(arg, offset, length)
}

Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (length) {
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

function allocUnsafe (size) {
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

function fromString (string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, offset)
  }

  return fromObject(value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),

/***/ "../../../../qrcode/node_modules/isarray/index.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../../../rxjs/_esm5/Scheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
//# sourceMappingURL=Scheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEvent PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEvent = __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__["a" /* fromEvent */];
//# sourceMappingURL=fromEvent.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concat__ = __webpack_require__("../../../../rxjs/_esm5/operator/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concat = __WEBPACK_IMPORTED_MODULE_1__operator_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.filter = __WEBPACK_IMPORTED_MODULE_1__operator_filter__["a" /* filter */];
//# sourceMappingURL=filter.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/share.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_share__ = __webpack_require__("../../../../rxjs/_esm5/operator/share.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_share PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.share = __WEBPACK_IMPORTED_MODULE_1__operator_share__["a" /* share */];
//# sourceMappingURL=share.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_take__ = __webpack_require__("../../../../rxjs/_esm5/operator/take.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_take PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.take = __WEBPACK_IMPORTED_MODULE_1__operator_take__["a" /* take */];
//# sourceMappingURL=take.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/FromEventObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isFunction__ = __webpack_require__("../../../../rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_isFunction,.._util_errorObject,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node.js
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * `fromEvent` accepts as a first argument event target, which is an object with methods
     * for registering event handler functions. As a second argument it takes string that indicates
     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
     * which are described in detail below. If your event target does not match any of the ones listed,
     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
     * handler functions have different names, but they all accept a string describing event type
     * and function itself, which will be called whenever said event happens.
     *
     * Every time resulting Observable is subscribed, event handler function will be registered
     * to event target on given event type. When that event fires, value
     * passed as a first argument to registered function will be emitted by output Observable.
     * When Observable is unsubscribed, function will be unregistered from event target.
     *
     * Note that if event target calls registered function with more than one argument, second
     * and following arguments will not appear in resulting stream. In order to get access to them,
     * you can pass to `fromEvent` optional project function, which will be called with all arguments
     * passed to event handler. Output Observable will then emit value returned by project function,
     * instead of the usual value.
     *
     * Remember that event targets listed below are checked via duck typing. It means that
     * no matter what kind of object you have and no matter what environment you work in,
     * you can safely use `fromEvent` on that object if it exposes described methods (provided
     * of course they behave as was described above). So for example if Node.js library exposes
     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
     * a good choice.
     *
     * If the API you use is more callback then event handler oriented (subscribed
     * callback function fires only once and thus there is no need to manually
     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
     * instead.
     *
     * `fromEvent` supports following types of event targets:
     *
     * **DOM EventTarget**
     *
     * This is an object with `addEventListener` and `removeEventListener` methods.
     *
     * In the browser, `addEventListener` accepts - apart from event type string and event
     * handler function arguments - optional third parameter, which is either an object or boolean,
     * both used for additional configuration how and when passed function will be called. When
     * `fromEvent` is used with event target of that type, you can provide this values
     * as third parameter as well.
     *
     * **Node.js EventEmitter**
     *
     * An object with `addListener` and `removeListener` methods.
     *
     * **JQuery-style event target**
     *
     * An object with `on` and `off` methods
     *
     * **DOM NodeList**
     *
     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
     *
     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
     * it contains and install event handler function in every of them. When returned Observable
     * is unsubscribed, function will be removed from all Nodes.
     *
     * **DOM HtmlCollection**
     *
     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
     * installed and removed in each of elements.
     *
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console every time a click
     * // occurs on the document.
     *
     *
     * @example <caption>Use addEventListener with capture option</caption>
     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
     *                                                                          // which will be passed to addEventListener
     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
     *
     * clicksInDocument.subscribe(() => console.log('document'));
     * clicksInDiv.subscribe(() => console.log('div'));
     *
     * // By default events bubble UP in DOM tree, so normally
     * // when we would click on div in document
     * // "div" would be logged first and then "document".
     * // Since we specified optional `capture` option, document
     * // will catch event when it goes DOWN DOM tree, so console
     * // will log "document" and then "div".
     *
     * @see {@link bindCallback}
     * @see {@link bindNodeCallback}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOM EventTarget, Node.js
     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isFunction__["a" /* isFunction */])(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_4__Subscription__["a" /* Subscription */](unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(void 0, args);
            if (result === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                subscriber.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatAll.js");
/** PURE_IMPORTS_START .._util_isScheduler,._of,._from,.._operators_concatAll PURE_IMPORTS_END */




/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from given
 * Observable and then moves on to the next.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * `concat` joins multiple Observables together, by subscribing to them one at a time and
 * merging their results into the output Observable. You can pass either an array of
 * Observables, or put them directly as arguments. Passing an empty array will result
 * in Observable that completes immediately.
 *
 * `concat` will subscribe to first input Observable and emit all its values, without
 * changing or affecting them in any way. When that Observable completes, it will
 * subscribe to then next Observable passed and, again, emit its values. This will be
 * repeated, until the operator runs out of Observables. When last input Observable completes,
 * `concat` will complete as well. At any given moment only one Observable passed to operator
 * emits values. If you would like to emit values from passed Observables concurrently, check out
 * {@link merge} instead, especially with optional `concurrent` parameter. As a matter of fact,
 * `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.
 *
 * Note that if some input Observable never completes, `concat` will also never complete
 * and Observables following the one that did not complete will never be subscribed. On the other
 * hand, if some Observable simply completes immediately after it is subscribed, it will be
 * invisible for `concat`, which will just move on to the next Observable.
 *
 * If any Observable in chain errors, instead of passing control to the next Observable,
 * `concat` will error immediately as well. Observables that would be subscribed after
 * the one that emitted error, never will.
 *
 * If you pass to `concat` the same Observable many times, its stream of values
 * will be "replayed" on every subscription, which means you can repeat given Observable
 * as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious,
 * you can always use {@link repeat}.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = Rx.Observable.concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 *
 * @example <caption>Concatenate an array of 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = Rx.Observable.concat([timer1, timer2, timer3]); // note that array is passed
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 *
 * @example <caption>Concatenate the same Observable to repeat it</caption>
 * const timer = Rx.Observable.interval(1000).take(2);
 *
 * Rx.Observable.concat(timer, timer) // concating the same Observable!
 * .subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('...and it is done!')
 * );
 *
 * // Logs:
 * // 0 after 1s
 * // 1 after 2s
 * // 0 after 3s
 * // 1 after 4s
 * // "...and it is done!" also after 4s
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} input1 An input Observable to concatenate with others.
 * @param {ObservableInput} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1 || (observables.length === 2 && Object(__WEBPACK_IMPORTED_MODULE_0__util_isScheduler__["a" /* isScheduler */])(observables[1]))) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__from__["a" /* from */])(observables[0]);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__operators_concatAll__["a" /* concatAll */])()(__WEBPACK_IMPORTED_MODULE_1__of__["a" /* of */].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/FromEventObservable.js");
/** PURE_IMPORTS_START ._FromEventObservable PURE_IMPORTS_END */

var fromEvent = __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__["a" /* FromEventObservable */].create;
//# sourceMappingURL=fromEvent.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concat__ = __webpack_require__("../../../../rxjs/_esm5/operators/concat.js");
/** PURE_IMPORTS_START .._operators_concat PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_concat__["a" /* concat */].apply(void 0, observables)(this);
}
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/** PURE_IMPORTS_START .._operators_switchMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMap__["a" /* switchMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/** PURE_IMPORTS_START .._operators_take PURE_IMPORTS_END */

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_take__["a" /* take */])(count)(this);
}
//# sourceMappingURL=take.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._observable_concat PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function (source) { return source.lift.call(__WEBPACK_IMPORTED_MODULE_0__observable_concat__["a" /* concat */].apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.keySelector)(value);
            if (key === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.compare)(this.key, key);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return function switchMapOperatorFunction(source) {
        return source.lift(new SwitchMapOperator(project, resultSelector));
    };
}
var SwitchMapOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("../../../../rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError,.._observable_EmptyObservable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return function (source) {
        if (count === 0) {
            return new __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__["a" /* EmptyObservable */]();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
var TakeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=take.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/Action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(__WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]));
//# sourceMappingURL=Action.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AsyncAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Action__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/Action.js");
/** PURE_IMPORTS_START .._util_root,._Action PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(__WEBPACK_IMPORTED_MODULE_1__Action__["a" /* Action */]));
//# sourceMappingURL=AsyncAction.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AsyncScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scheduler__ = __webpack_require__("../../../../rxjs/_esm5/Scheduler.js");
/** PURE_IMPORTS_START .._Scheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsyncScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__Scheduler__["a" /* Scheduler */]));
//# sourceMappingURL=AsyncScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return async; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */


/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]);
//# sourceMappingURL=async.js.map 


/***/ })

});
//# sourceMappingURL=common.chunk.js.map