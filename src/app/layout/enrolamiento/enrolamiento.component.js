"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var webRTC_service_1 = require("../../common/webRTC.service");
var global_1 = require("../../common/global");
var PersonaEnrolar_1 = require("../../models/PersonaEnrolar");
var forms_1 = require("@angular/forms");
require("rxjs/add/observable/of");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/timeInterval");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/take");
var EnrolamientoComponent = (function () {
    function EnrolamientoComponent(webRTC, _prestoService, _router) {
        this.webRTC = webRTC;
        this._prestoService = _prestoService;
        this._router = _router;
        this.currImgPhoto = global_1.GLOBAL.MPHOTOURL;
        this.personEnrolar = new PersonaEnrolar_1.PersonaEnrolar();
        this.completed = false;
        this.bioMap = {};
        this.bioError = {};
        this.savedInfo = false;
        this.credEmpresa = '';
        this.credOcupacion = '';
        this.filesToUpload = [];
        this.biometricoTest = [
            'asdfSDFAJGdadXasdfXXvvasDFAWERFDSA',
            'ASDFLaSLDflaSDLFasodogwertQEqrLD66',
            'SSaSaSSDOPF34523FASDCAasdcasSHD444',
            'aafoiqiowncnqwiehudfñakdfjñlsahdfw',
            '208293084jwadsdkjlfhRQrwqEFasdf234'
        ];
        this.isStreaming = false;
    }
    EnrolamientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enrolFrom = new forms_1.FormGroup({
            nombre: new forms_1.FormControl('', forms_1.Validators.required),
            apellidoPaterno: new forms_1.FormControl('', forms_1.Validators.required),
            apellidoMaterno: new forms_1.FormControl('', forms_1.Validators.required),
            fechaNacimiento: new forms_1.FormControl('', forms_1.Validators.required),
            lugarNacimiento: new forms_1.FormControl('', forms_1.Validators.required),
            sexo: new forms_1.FormControl('', forms_1.Validators.required),
            codigoPostal: new forms_1.FormControl('', forms_1.Validators.required),
            telefono: new forms_1.FormControl('', forms_1.Validators.required),
            telefonoEmergencia: new forms_1.FormControl('', forms_1.Validators.required),
            contactoEmergencia: new forms_1.FormControl('', forms_1.Validators.required),
            nss: new forms_1.FormControl('', forms_1.Validators.required),
            rfc: new forms_1.FormControl('', forms_1.Validators.required),
            estadoCivil: new forms_1.FormControl('', forms_1.Validators.required),
            tipoSangre: new forms_1.FormControl('', forms_1.Validators.required),
            registroPatronal: new forms_1.FormControl('', forms_1.Validators.required),
            accesoOtorgado: new forms_1.FormControl('', forms_1.Validators.required),
            motivoAcceso: new forms_1.FormControl('', forms_1.Validators.required),
            image: new forms_1.FormControl('', forms_1.Validators.required),
            enrolComplete: new forms_1.FormControl('', forms_1.Validators.required),
            empresaCredId: new forms_1.FormControl(''),
            seniasParticulares: new forms_1.FormControl(''),
            licencia: new forms_1.FormControl(''),
            tipoLicencia: new forms_1.FormControl(''),
            direccion: new forms_1.FormControl(''),
            enrolActive: new forms_1.FormControl(''),
            rutaImagenes: new forms_1.FormControl(''),
            biometricoFinal: new forms_1.FormControl(''),
            __v: new forms_1.FormControl(''),
            _id: new forms_1.FormControl('', forms_1.Validators.required)
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
            console.log('=====>', res);
            // borramos Controles que previamente se crean en runtime
            _this.personEnrolar.empresa.forEach(function (value, index) {
                _this.enrolFrom.removeControl("ocupacionEmpresa_" + index);
                _this.enrolFrom.removeControl("fechaContratoEmpresa_" + index);
            });
            _this.enrolFrom.removeControl('biometrico');
            _this.personEnrolar = new PersonaEnrolar_1.PersonaEnrolar(res);
            // Setear datos a form group
            delete res.empresa;
            _this.enrolFrom.setValue(res);
            _this.cmbSexoChange(_this.personEnrolar.sexo);
            _this.onEmpresaChange(_this.personEnrolar.empresa[0]);
            _this.imagenes = _this.personEnrolar.rutaImagenes.split(',').map(function (x) { return global_1.GLOBAL.RESTAPINJS + 'getImagePreEnrol/' + x.replace('./', '').replace(/\//g, '|'); });
            _this.personEnrolar.empresa.forEach(function (item, index) {
                var controlOcupacion = new forms_1.FormControl(item.ocupacion, forms_1.Validators.required);
                var controlFechaContrato = new forms_1.FormControl(item.fechaContrato, forms_1.Validators.required);
                _this.enrolFrom.addControl('ocupacionEmpresa_' + index, controlOcupacion);
                _this.enrolFrom.addControl('fechaContratoEmpresa_' + index, controlFechaContrato);
            });
            // se agregan formControl para biometricos
            _this.savedInfo = res.enrolComplete;
            if (_this.savedInfo) {
                _this.enrolFrom.disable();
            }
            else {
                _this.biometricoForm = new forms_1.FormGroup({
                    biometricoUno: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _this.control.bind(_this)])),
                    biometricoDos: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _this.control.bind(_this)])),
                    biometricoTres: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _this.control.bind(_this)])),
                    biometricoCuatro: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _this.control.bind(_this)])),
                    biometricoCinco: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _this.control.bind(_this)]))
                }, _this.biometricoMatcher.bind(_this));
                _this.biometricoForm.valueChanges.subscribe(function (_) { return _this.validateFormCompletion(); });
            }
        }, function (error) { return console.log(error); });
        this._prestoService.setBreadCrumb([{
                routerLink: '/enrolamiento',
                txt: 'Enrolamiento',
                class: ''
            }, {
                routerLink: '/enrolamiento',
                txt: 'Finalizar Enrolamiento',
                class: 'active'
            }]);
    };
    EnrolamientoComponent.prototype.control = function (control) {
        if (!control.parent) {
            return null;
        }
        this.updateMap(control.value, this.getControlName(control));
        return null;
    };
    EnrolamientoComponent.prototype.updateMap = function (str, controlName) {
        if (!!str) {
            if (!this.bioMap.hasOwnProperty(str)) {
                this.bioMap[str] = {
                    controls: [controlName],
                    count: 1
                };
            }
            else {
                this.bioMap[str].controls.push(controlName);
                this.bioMap[str].count++;
            }
        }
    };
    EnrolamientoComponent.prototype.getControlName = function (c) {
        var formGroup = c.parent.controls;
        return Object.keys(formGroup).find(function (name) { return c === formGroup[name]; }) || null;
    };
    EnrolamientoComponent.prototype.biometricoMatcher = function (control) {
        var _this = this;
        var bioMap = this.bioMap;
        var hasError = null;
        var hasSuccess = null;
        for (var obj in bioMap) {
            if (bioMap.hasOwnProperty(obj)) {
                if (bioMap[obj].count <= 2) {
                    hasError = { capturaIncorrecta: true };
                }
                if (!!obj && bioMap[obj].count > 2) {
                    hasSuccess = true;
                    bioMap[obj].controls.forEach(function (item) {
                        _this.bioError[item] = true;
                        _this.biometricoFinal = control.get(item).value;
                    });
                }
            }
        }
        var totalCaptures = Object.values(bioMap).reduce(function (prev, curr) { return prev + curr.count; }, 0);
        return totalCaptures === 5 && !hasSuccess ? hasError : null;
    };
    EnrolamientoComponent.prototype.validateFormCompletion = function () {
        var _this = this;
        // se agrega timeout para que siempre se vea la animacion
        window.setTimeout(function (_) {
            _this.completed = (_this.enrolFrom.valid || _this.enrolFrom.disabled)
                && (_this.biometricoForm ? _this.biometricoForm.valid : true)
                && (_this.currImgPhoto.includes('image/png;base64') || !!_this.enrolFrom.controls['image'].value);
        }, 100);
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
        document.querySelector('.breadcrumb > li.active')
            .innerHTML = data.title;
    };
    EnrolamientoComponent.prototype.qrModelChange = function () {
        var imgDisplay = this.currImgPhoto.includes('image/png;base64')
            || this.personEnrolar.image === '' ? this.currImgPhoto : global_1.GLOBAL.RESTAPINJS + 'getImageEnrol/' + this.personEnrolar.image;
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
        this.credEmpresa = empresa.idEmpresa.nombreEmpresa;
        this.credOcupacion = empresa.ocupacion;
        this.credIdEmpresa = empresa._id;
        this.enrolFrom.controls['empresaCredId'].setValue(empresa._id);
        this.qrModelChange();
    };
    EnrolamientoComponent.prototype.cmbSexoChange = function (sexValue) {
        this.personEnrolar.sexo = sexValue;
        switch (sexValue) {
            case global_1.GLOBAL.MALE:
                this.currImgPhoto = global_1.GLOBAL.MPHOTOURL;
                break;
            case global_1.GLOBAL.FEMALE:
                this.currImgPhoto = global_1.GLOBAL.FPHOTOURL;
                break;
            default:
                this.currImgPhoto = global_1.GLOBAL.MPHOTOURL;
        }
        this.qrModelChange();
    };
    EnrolamientoComponent.prototype.uploadEnrolImage = function () {
        var _this = this;
        var file = global_1.GLOBAL.dataURLtoFile(this.currImgPhoto, this.personEnrolar._id + '.png');
        this.filesToUpload = [file];
        var oldImageFile = this.personEnrolar.image !== '' ? this.personEnrolar.image : 'null';
        this._prestoService.makeFileRequest(global_1.GLOBAL.RESTAPINJS + 'saveEnrolImage/' + this.personEnrolar._id + '/' + oldImageFile, [], this.filesToUpload, 'image')
            .then(function (success) {
            _this.enrolFrom.controls['image'].setValue(success.image);
        }, function (error) {
            console.log('Ocurrio un Error al subir Archivo =====> ');
            console.log(error);
        });
    };
    EnrolamientoComponent.prototype.finalizarEnrol = function () {
        var _this = this;
        this.enrolFrom.controls['enrolComplete'].setValue('true');
        this.enrolFrom.controls['enrolActive'].setValue('true');
        this.enrolFrom.controls['biometricoFinal'].setValue(this.biometricoFinal);
        this._prestoService.saveEnrolamiento(this.enrolFrom.value).subscribe(function (res) {
            _this.savedInfo = res.enrolComplete;
        }, function (err) {
            alert('Ocurrio un Error al Guardar Informacion : ' + err.message);
        });
    };
    EnrolamientoComponent.prototype.captureBiometrico = function () {
        var _this = this;
        this.bioMap = {};
        var count = 0;
        var biometricoArr = ['biometricoUno', 'biometricoDos', 'biometricoTres', 'biometricoCuatro', 'biometricoCinco'];
        this.biometricoForm.reset();
        Observable_1.Observable.interval(750)
            .timeInterval()
            .take(5)
            .subscribe(function (timeInterval) {
            _this.biometricoForm.get("" + biometricoArr[count++]).setValue(_this.biometricoTest[Math.floor(Math.random() * 4) + 1]);
        });
    };
    EnrolamientoComponent.prototype.imprimirCredencial = function () {
        $('.divImpresion').printThis({
            loadCSS: 'assets/styleEnrolamiento.css',
            importStyle: false,
            canvas: true
        });
    };
    return EnrolamientoComponent;
}());
__decorate([
    core_1.ViewChild('hardwareVideo')
], EnrolamientoComponent.prototype, "hardwareVideo", void 0);
__decorate([
    core_1.ViewChild('photoCanvas')
], EnrolamientoComponent.prototype, "photoCanvas", void 0);
__decorate([
    core_1.ViewChild('currImgPhoto')
], EnrolamientoComponent.prototype, "imgEle", void 0);
EnrolamientoComponent = __decorate([
    core_1.Component({
        selector: 'app-enrolamiento',
        templateUrl: './enrolamiento.component.html',
        styleUrls: ['./enrolamiento.component.css'],
        providers: [webRTC_service_1.WebRTCService]
    })
], EnrolamientoComponent);
exports.EnrolamientoComponent = EnrolamientoComponent;
