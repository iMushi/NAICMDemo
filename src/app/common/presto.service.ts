import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "./global";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PersonaEnrolar} from "../models/PersonaEnrolar";
import {IEmpresa, TBreaCrumb} from "../models/interface";

@Injectable()

export class PrestoService {

	public _prestoSearchBy: string[];

	private enrolamientoResultsNombre = new BehaviorSubject<Object>([]);
	public enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();

	public enrolamientoPerson = new BehaviorSubject<PersonaEnrolar>(new PersonaEnrolar());
	public personEnrolar = this.enrolamientoPerson.asObservable();

	private breadcrumbBS = new BehaviorSubject<TBreaCrumb[]>([]);
	public breadEmitted$ = this.breadcrumbBS.asObservable();

	constructor(private http: HttpClient) {
	}

	getEnrolamientoByName(param: string[]) {

		this._prestoSearchBy = param;


		let params = new HttpParams()
			.append('nombre', param[0])
			.append('apellidoPaterno', param[1]);


		this.http.get(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, error => console.log(error)
		);

	}

	getSearchEnrolamiento(jsonParams: IEmpresa) {

		let params = new HttpParams();

		for (let obj in jsonParams) {
			if (jsonParams[obj] && jsonParams[obj] !== '')
				params = params.append(obj, jsonParams[obj]);
		}

		this.http.get(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, error => console.log(error)
		);
	}

	setPersonEnrolamiento(personId: string) {

		let results: Array<any> = <any>this.enrolamientoResultsNombre.getValue();

		this.enrolamientoPerson.next(
			results.find(res => {
				return res._id === personId;
			}));
	}


	setBreadCrumb(params: Array<TBreaCrumb>) {
		this.breadcrumbBS.next(params);
	}

	resetPerson() {
		this.enrolamientoPerson.next(new PersonaEnrolar());
	}

}
