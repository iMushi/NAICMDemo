export interface IEmpresa {
	_id: string;
	name?: string;
	fechaContrato?: string;
	nombre?: string;
	apellidoPaterno?: string;
	apellidoMaterno?: string;
	fechaNacimiento?: string;
	lugarNacimiento?: string;
	sexo?: string;
	codigoPostal?: string;
	telefono?: string;
	telefonoEmergencia?: string;
	contactoEmergencia?: string;
	nss?: string;
	rfc?: string;
	estadoCivil?: string;
	tipoSangre?: string;
	registroPatronal?: string;
	accesoOtorgado?: string;
	motivoAcceso?: string;
	ocupacion?: string;
	empresa ?: Array<TEmpresa>;
	image?: string;
	enrolComplete?: boolean;
	empresaCredId?: string;
	enrolActive ?: boolean;
	rutaImagenes ?: string;
	biometricoFinal ?: string;
}

export interface Msg {
	message?: string;
}

export interface PaginatedResult {
	docs: Array<any>;
	limit: number;
	page: string;
	pages: number;
	total: number;
}


export interface PaginatedIEmpresa {
	docs: Array<IEmpresa>;
	limit: number;
	page: number;
	pages: number;
	total: number;
}

export interface TEventual {
	nombre: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
	telefono: string;
	telefonoEmergencia: string;
	ocupacion: string;
	accesoOtorgado: string;
	motivoAcceso: string;
	imageBase64: string;
	idEmpresa: string;
	fechaAcceso: Date;
}

export interface TpersonCredencial {
	nombre: string;
	apellidoPaterno: string;
	nombreEmpresa: string;
	ocupacion: string;
	rfc: string;
	qrCode: string;
	imgName ?: string;
	imgBase64 ?: string;
}

export interface TUpload {
	_id: string;
	src: string;
}

export interface TEmpresa {
	_id: string;
	idEmpresa: any;
	nombreEmpresa: string;
	fechaContrato: string;
	ocupacion: string;
}

export interface TBreaCrumb {
	routerLink: string;
	txt: string;
	class: string;
}

export interface IUserResponse {
	user: IUsuario;
	token: string;
}

export interface IUsuario {
	_id: string;
	password: string;
	role: string;
	email: string;
	name: string ;
	surname: string;
}
