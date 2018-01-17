"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = require("rxjs/util/isArray");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environments/environment");
exports.GLOBAL = {
    MALE: 'M',
    FEMALE: 'F',
    MALEPHOTO: 'assets/customer-512.png',
    FEMALEPHOTO: 'assets/girl-512.png',
    MPHOTOURL: 'assets/customer-512.png',
    FPHOTOURL: 'assets/girl-512.png',
    RESTAPI: 'http://localhost:3000/enrolamiento',
    DEFAULTPERPAGE: 10,
    DEFAULTPERPAGEMASIVA: 5,
    DEFAULTPERSON: { empresas: [{}] },
    errorCargaMasiva: 'errorCargaMasiva.log',
    cargaMasiva: 'cargaMasiva.log',
    BUSCAENROL: 'enrolamiento',
    BUSCAMANAGEMENT: 'management',
    // RESTAPINJS : 'http://localhost:5000/api/',
    // RESTAPINJS : 'https://aqueous-beyond-82335.herokuapp.com/api/',
    RESTAPINJS: environment_1.environment.restUrl,
    checkToArray: function (obj) {
        if (!isArray_1.isArray(obj)) {
            if (obj) {
                return [obj];
            }
            else {
                return [];
            }
        }
        else {
            return obj;
        }
    },
    /**
     * Convert Object to HttpParams
     * @param {Object} obj
     * @returns {HttpParams}
     */
    toHttpParams: function (obj, includes) {
        return Object.getOwnPropertyNames(obj)
            .reduce(function (p, key) {
            var val = '';
            if (obj[key]) {
                val = exports.GLOBAL.includesAny(key, includes) ? obj[key] : obj[key].toUpperCase();
            }
            return p.set(key, val);
        }, new http_1.HttpParams());
    },
    dataURLtoFile: function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    },
    includesAny: function (testStr, checkList) { return checkList.reduce(function (prev, curr) { return prev || testStr.includes(curr); }, false); }
};
