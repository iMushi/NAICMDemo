"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.PersonaEnrolar = PersonaEnrolar;
