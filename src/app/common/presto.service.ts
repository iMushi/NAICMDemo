import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "./global";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PersonaEnrolar} from "./PersonaEnrolar";

@Injectable()

export class PrestoService {

	public _prestoService: string;
	public _prestoSearchBy: string[];

	private enrolamientoResultsNombre = new BehaviorSubject<Object>([]);
	public enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();


	public enrolamientoPerson = new BehaviorSubject<PersonaEnrolar>(new PersonaEnrolar());
	public personEnrolar = this.enrolamientoPerson.asObservable();

	constructor(private http: HttpClient) {
		this._prestoService = 'Desde constructor Injectable';
	}

	getPrestoService(): string {
		return this._prestoService;
	}

	setPrestoService(value: string) {
		this._prestoService = value;
	}

	getEnrolamientoByName(param: string[]) {

		this._prestoSearchBy = param;

		let params = new HttpParams()
			.append('nombre', param[0])
			.append('apellidoPaterno', param[1])
			.append('_embed', 'empresas');


		this.http.get(GLOBAL.RESTAPI, {params}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, error => console.log(error)
		)
	}

	setPersonEnrolamiento(personId: number) {
		let results: Array<any> = <any>this.enrolamientoResultsNombre.getValue();

		this.enrolamientoPerson.next(
			results.find(res => {
				return res.id === personId;
			}));
	}

	resetPerson() {
		this.enrolamientoPerson.next(new PersonaEnrolar());
	}

}
