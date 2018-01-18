webpackJsonp(["cargamasiva.module"],{

/***/ "../../../../../src/app/layout/cargamasiva/cargamasiva-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargamasivaRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cargamasiva_component__ = __webpack_require__("../../../../../src/app/layout/cargamasiva/cargamasiva.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cargamasiva_component__["a" /* CargamasivaComponent */] }
];
var CargamasivaRouting = (function () {
    function CargamasivaRouting() {
    }
    return CargamasivaRouting;
}());
CargamasivaRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CargamasivaRouting);

//# sourceMappingURL=cargamasiva-routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cargamasiva/cargamasiva.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/cargamasiva/cargamasiva.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"mainCargaMasiva\">\n\n\t<form #formCargaMasiva [formGroup]=\"cargaMForm\" class=\"form-horizontal\" >\n\n\t\t<div class=\"panel panel-primary panelC panel-primaryC\" [ngBusy]=\"{busy: uploadBusy,\n\t\t \tmessage: ( progressCarga | async )}\" >\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"glyphicon glyphicon-hdd\"></i>&nbsp;&nbsp;&nbsp;Carga Masiva</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t<div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\n\t\t\t\t col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1\">\n\n\t\t\t\t\t<div id=\"acordionCargaMasiva\">\n\n\n\t\t\t\t\t\t<div class=\"panel panel-primary panelC panel-primaryC\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#acordionCargaMasiva\" href=\"#collapseCargaMasiva\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-open-file\"></i>&nbsp;&nbsp;&nbsp;Realizar Carga Masiva<span class=\"caretC\"></span></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body panel-collapse in\" id=\"collapseCargaMasiva\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t\t\t\t\t\tSeleccione los archivos a cargar en formato <strong>CSV</strong> (Informaci&oacute;n de empleados) y formato <strong>ZIP</strong> con la\n\t\t\t\t\t\t\t\t\t\tdocumentaci&oacute;n correspondiente\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Archivo CSV</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"cargaCSV\" (change)=\"fileChangeEvent($event)\" accept=\".csv\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Archivo ZIP</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"cargaZip\" (change)=\"fileChangeEvent($event)\" accept=\".zip\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"center-block\" style=\"width: 315px;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"margin-right: 10px\" [disabled]=\"file$ | async\" (click)=\"guardar();\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-save\"></i>&nbsp;&nbsp;&nbsp;Cargar Archivos\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelCarga()\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-stop\"></i>&nbsp;&nbsp;&nbsp;Cancelar\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"panel panel-primary panelC panel-primaryC\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#acordionCargaMasiva\" href=\"#collapseListado\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp;&nbsp;&nbsp;Listado de Cargas Masivas  <span class=\"caretC\"></span></h3>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body panel-collapse collapse\" id=\"collapseListado\">\n\t\t\t\t\t\t\t\t<table class=\"table table-striped table-hover \">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr class=\"info\">\n\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t<th>Usuario Carga</th>\n\t\t\t\t\t\t\t\t\t\t<th>Fecha de Carga</th>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\" style=\"text-align: center\">Resultado de Carga</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let carga of cargasMasiva | paginate: config\">\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{carga.email}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{carga.idBatch | date:'dd/mm/yyyy'}} {{carga.idBatch| date : 'shortTime'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a download=\"\" class=\"btn btn-info btn-sm\" href=\"{{carga.ruta}}\"><span class=\"glyphicon glyphicon-ok-sign\"></span>&nbsp;&nbsp;&nbsp;Registros\n\t\t\t\t\t\t\t\t\t\t\t\t\tCargados</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a download=\"\" class=\"btn btn-danger btn-sm\" href=\"{{carga.rutaError}}\"><span class=\"glyphicon glyphicon-remove-sign\"></span>&nbsp;&nbsp;&nbsp;Registros\n\t\t\t\t\t\t\t\t\t\t\t\t\tNo Cargados</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<pagination-template #p=\"paginationApi\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t [id]=\"config.id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t (pageChange)=\"onPageChange($event)\">\n\t\t\t\t\t\t\t\t\t<div class=\"custom-pagination\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"pagination pagination-sm\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a [class.disabled]=\"p.isFirstPage()\" *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\"> &laquo; </a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let page of p.pages\" [class.active]=\"p.getCurrent() === page.value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"p.setCurrent(page.value);\">{{page.label}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [class.disabled]=\"p.isLastPage()\" *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\">&raquo;</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</pagination-template>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/layout/cargamasiva/cargamasiva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargamasivaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_global__ = __webpack_require__("../../../../../src/app/common/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_presto_service__ = __webpack_require__("../../../../../src/app/common/presto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_msg_service__ = __webpack_require__("../../../../../src/app/common/msg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CargamasivaComponent = (function () {
    function CargamasivaComponent(_prestoService, _authService, _msgService) {
        this._prestoService = _prestoService;
        this._authService = _authService;
        this._msgService = _msgService;
        this.filesSelected = {
            cargaZip: '',
            cargaCSV: ''
        };
        this.progressCarga = this._prestoService.uploadProgress;
        this.subjectFile = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.file$ = this.subjectFile.asObservable();
        this.config = {
            id: 'cargaMasivaPag',
            itemsPerPage: __WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].DEFAULTPERPAGEMASIVA,
            currentPage: 1,
            totalItems: 1
        };
    }
    CargamasivaComponent.prototype.ngOnDestroy = function () {
    };
    CargamasivaComponent.prototype.ngOnInit = function () {
        this.getCargaMasiva(1);
        this.cargaMForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            csvFile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            zipFile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
    };
    CargamasivaComponent.prototype.getCargaMasiva = function (pageNumber) {
        var _this = this;
        this._prestoService.getCargaMasiva(pageNumber).subscribe(function (resp) {
            if (!resp.docs)
                return;
            _this.cargasMasiva = resp.docs.map(function (x) {
                return {
                    idBatch: x.idBatch,
                    email: x.idUser.email,
                    ruta: __WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].RESTAPINJS + "getResultCarga/" + x.idUser.email + "|" + x.idBatch + "|" + __WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].cargaMasiva,
                    rutaError: __WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].RESTAPINJS + "getResultCarga/" + x.idUser.email + "|" + x.idBatch + "|" + __WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].errorCargaMasiva,
                };
            });
            _this.config.currentPage = resp.page;
            _this.config.totalItems = resp.total;
        }, function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
        });
    };
    CargamasivaComponent.prototype.cancelCarga = function () {
        [].forEach.call(document.querySelectorAll('input[type=file]'), function (item) {
            item.value = '';
        });
        this.filesSelected = { cargaZip: '', cargaCSV: '' };
        this.subjectFile.next(true);
    };
    CargamasivaComponent.prototype.guardar = function () {
        var _this = this;
        this.uploadBusy = this._prestoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_1__common_global__["a" /* GLOBAL */].RESTAPINJS + 'cargaZip', [], this.filesToUpload, [
            'csvCargaZip', 'csvCargaMasiva'
        ]).then(function (resp) {
            _this._msgService.setMsg(resp);
            _this.getCargaMasiva(1);
            _this.cancelCarga();
        }).catch(function (err) {
            if (err.status === 403) {
                _this._authService.logout().subscribe();
            }
        });
    };
    CargamasivaComponent.prototype.fileChangeEvent = function (fileInput) {
        var subject;
        this.filesSelected[fileInput.target.id] = fileInput.target.files.length ? fileInput.target.files : '';
        if (!!this.filesSelected['cargaZip'] && !!this.filesSelected['cargaCSV']) {
            subject = false;
            this.filesToUpload = [
                this.filesSelected['cargaZip'][0],
                this.filesSelected['cargaCSV'][0]
            ];
        }
        else {
            subject = true;
        }
        this.subjectFile.next(subject);
        /* let fileList = event.target.files;
  let file = fileList[0];
  let extension = file.name.split('.')[1].toLowerCase();

  if (extension === 'jpg') {
    alert('Good file extension!');
  }
  else {
    event.target.value = '';
    alert('Wrong file extension! File input is cleared.');
  }
    */
    };
    CargamasivaComponent.prototype.onPageChange = function (number) {
        this.config.currentPage = number;
        this.getCargaMasiva(number);
    };
    return CargamasivaComponent;
}());
CargamasivaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cargamasiva',
        template: __webpack_require__("../../../../../src/app/layout/cargamasiva/cargamasiva.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/cargamasiva/cargamasiva.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_presto_service__["a" /* PrestoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_msg_service__["a" /* MsgService */]) === "function" && _c || Object])
], CargamasivaComponent);

var _a, _b, _c;
//# sourceMappingURL=cargamasiva.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cargamasiva/cargamasiva.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargamasivaModule", function() { return CargamasivaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/layout/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cargamasiva_component__ = __webpack_require__("../../../../../src/app/layout/cargamasiva/cargamasiva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cargamasiva_routing__ = __webpack_require__("../../../../../src/app/layout/cargamasiva/cargamasiva-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_busy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CargamasivaModule = (function () {
    function CargamasivaModule() {
    }
    return CargamasivaModule;
}());
CargamasivaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__cargamasiva_routing__["a" /* CargamasivaRouting */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__cargamasiva_component__["a" /* CargamasivaComponent */]]
    })
], CargamasivaModule);

//# sourceMappingURL=cargamasiva.module.js.map

/***/ })

});
//# sourceMappingURL=cargamasiva.module.chunk.js.map