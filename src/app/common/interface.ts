export interface IEmpresa {
	id: number
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
	empresas ?: Array<TEmpresa>
}

export type TEmpresa = {
	id : number,
	nombreEmpresa : string,
	fechaContrato : string,
	ocupacion : string
}
