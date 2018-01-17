"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var global_1 = require("./global");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PersonaEnrolar_1 = require("../models/PersonaEnrolar");
var PrestoService = (function () {
    function PrestoService(http, _authService, _router, _msgService) {
        this.http = http;
        this._authService = _authService;
        this._router = _router;
        this._msgService = _msgService;
        this.enrolamientoResultsNombre = new BehaviorSubject_1.BehaviorSubject([]);
        this.enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();
        this.enrolamientoPerson = new BehaviorSubject_1.BehaviorSubject(new PersonaEnrolar_1.PersonaEnrolar());
        this.personEnrolar = this.enrolamientoPerson.asObservable();
        this.impresionPerson = new BehaviorSubject_1.BehaviorSubject(null);
        this.impresion$ = this.impresionPerson.asObservable();
        this.subjectManageEnrolamiento = new BehaviorSubject_1.BehaviorSubject(null);
        this.manageEnrol$ = this.subjectManageEnrolamiento.asObservable();
        this.breadcrumbBS = new BehaviorSubject_1.BehaviorSubject([]);
        this.breadEmitted$ = this.breadcrumbBS.asObservable();
    }
    PrestoService.prototype.getEnrolamientoByName = function (param, pageNumber) {
        var _this = this;
        this._prestoSearchBy = param;
        this.lastSearch = param;
        var params = new http_1.HttpParams()
            .append('nombre', param[0].toUpperCase())
            .append('apellidoPaterno', param[1].toUpperCase())
            .append('page', pageNumber.toString())
            .append('maxPerPage', global_1.GLOBAL.DEFAULTPERPAGE.toString());
        this.pageFunction = 'getEnrolamientoByName';
        this.http.get(global_1.GLOBAL.RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (res) {
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
        var params = new http_1.HttpParams();
        for (var obj in jsonParams) {
            if (jsonParams[obj] && jsonParams[obj] !== '') {
                params = params.append(obj, global_1.GLOBAL.includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
            }
        }
        this.pageFunction = 'getSearchEnrolamiento';
        params = params.append('page', pageNumber.toString());
        params = params.append('maxPerPage', global_1.GLOBAL.DEFAULTPERPAGE.toString());
        this.http.get(global_1.GLOBAL.RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (res) {
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
        var params = new http_1.HttpParams();
        for (var obj in jsonParams) {
            if (jsonParams[obj] && jsonParams[obj] !== '') {
                params = params.append(obj, global_1.GLOBAL.includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
            }
        }
        params = params.append('page', pageNumber.toString());
        params = params.append('maxPerPage', global_1.GLOBAL.DEFAULTPERPAGE.toString());
        this.http.get(global_1.GLOBAL.RESTAPINJS + 'searchEnrol', { params: params, withCredentials: true }).subscribe(function (resp) {
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
        this.impresionPerson.next(new PersonaEnrolar_1.PersonaEnrolar(results.find(function (res) {
            return res._id === personId;
        })));
    };
    PrestoService.prototype.saveEnrolamiento = function (personEnrol) {
        console.log(personEnrol);
        var params = global_1.GLOBAL.toHttpParams(personEnrol, ['_id', 'empresaId', 'empresaCredId', 'image', 'enrolComplete', 'enrolActive', 'rutaImagenes', 'biometricoFinal', 'biometrico']);
        params = params.delete('empresa');
        return this.http.post(global_1.GLOBAL.RESTAPINJS + 'saveEnrol', params, { withCredentials: true });
    };
    PrestoService.prototype.saveEventual = function (eventual) {
        var params = global_1.GLOBAL.toHttpParams(eventual, ['idEmpresa', 'imageBase64', 'fechaAcceso']);
        return this.http.post(global_1.GLOBAL.RESTAPINJS + 'saveEventual', params, { withCredentials: true });
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
        this.enrolamientoPerson.next(new PersonaEnrolar_1.PersonaEnrolar());
    };
    PrestoService.prototype.getEventual = function (pageNumber) {
        var params = new http_1.HttpParams()
            .append('page', pageNumber.toString())
            .append('maxPerPage', global_1.GLOBAL.DEFAULTPERPAGE.toString());
        return this.http.get(global_1.GLOBAL.RESTAPINJS + 'getEventuales', { params: params, withCredentials: true });
    };
    PrestoService.prototype.getCargaMasiva = function (pageNumber) {
        var params = new http_1.HttpParams()
            .append('page', pageNumber.toString())
            .append('maxPerPage', global_1.GLOBAL.DEFAULTPERPAGEMASIVA.toString());
        var idUser = this._authService.getIdentity().user._id;
        return this.http.get(global_1.GLOBAL.RESTAPINJS + 'getCargaMasiva/' + idUser, { params: params, withCredentials: true });
    };
    PrestoService.prototype.setManagementRes = function (data) {
        this.subjectManageEnrolamiento.next(data);
    };
    return PrestoService;
}());
PrestoService = __decorate([
    core_1.Injectable()
], PrestoService);
exports.PrestoService = PrestoService;
