import {IUsuario} from "./interface";


export class Usuario implements IUsuario {


	constructor(public _id: string = '',
				public password: string = '',
				public role: string = '',
				public email: string = '',
				public name: string = '',
				public surname: string = ''){
	}
}
