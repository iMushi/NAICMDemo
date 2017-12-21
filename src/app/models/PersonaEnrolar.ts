import {IEmpresa, TEmpresa} from "./interface";

export class PersonaEnrolar implements IEmpresa {

	_id: string;
	name: string;
	fechaContrato: string;
	nombre: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
	fechaNacimiento: string;
	lugarNacimiento: string;
	sexo: string;
	codigoPostal: string;
	telefono: string;
	telefonoEmergencia: string;
	contactoEmergencia: string;
	nss: string;
	rfc: string;
	estadoCivil: string;
	tipoSangre: string;
	registroPatronal: string;
	accesoOtorgado: string;
	motivoAcceso: string;
	empresa: Array<TEmpresa>;
	image : string = null;
	enrolComplete : boolean = false;
	empresaCredId : string ;
	enrolActive : boolean = false;
	rutaImagenes : string;


	constructor(values?: IEmpresa) {


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

		} else {
			this._id = undefined;
			this.nombre = '';
			this.apellidoPaterno = '';
			this.sexo = '';
			this.empresa = [{
				_id: undefined,
				nombreEmpresa: '',
				fechaContrato: '',
				ocupacion: ''
			}];
		}

	}

	getQRValue(): string {
		return `${this.nombre}|${this.apellidoPaterno}|${this.rfc}`;
	}
}


