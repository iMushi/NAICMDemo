export interface IEmpresa {
	_id: string
	name?:string
	fechaContrato?: string
	nombre?: string
	apellidoPaterno?: string
	apellidoMaterno?: string
	fechaNacimiento?: string
	lugarNacimiento?: string
	sexo?: string
	codigoPostal?: string
	telefono?: string
	telefonoEmergencia?: string
	contactoEmergencia?: string
	nss?: string
	rfc?: string
	estadoCivil?: string
	tipoSangre?: string
	registroPatronal?: string
	accesoOtorgado?: string
	motivoAcceso?: string
	ocupacion?: string
	empresa ?: Array<TEmpresa>
	image?: string
	enrolComplete? : boolean
}

export type TUpload ={
	_id : string,
	src : string
}

export type TEmpresa = {
	_id : number,
	nombreEmpresa : string,
	fechaContrato : string,
	ocupacion : string
}

export type TBreaCrumb = {
	routerLink: string,
	txt : string,
	class: string
}

export interface IUserResponse{
	user : IUsuario;
	token : string;
}

export interface IUsuario{
	_id : string;
	password: string;
	role:string;
	email : string;
	name:string ;
	surname : string;
}
