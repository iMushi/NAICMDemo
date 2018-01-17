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
var util_1 = require("util");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.identity = null;
    }
    AuthService.prototype.login = function (userToLogin) {
        var params = new http_1.HttpParams().append("email", userToLogin.email).append("password", userToLogin.password);
        return this._http.post(global_1.GLOBAL.RESTAPINJS + 'login', params, { withCredentials: true });
    };
    AuthService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (!util_1.isUndefined(identity)) {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    AuthService.prototype.logout = function () {
        this.identity = null;
        localStorage.clear();
        return this._http.post(global_1.GLOBAL.RESTAPINJS + 'logout', null, { withCredentials: true });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
