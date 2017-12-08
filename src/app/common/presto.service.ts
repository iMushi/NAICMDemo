import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "./global";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PersonaEnrolar} from "../models/PersonaEnrolar";
import {IEmpresa, TBreaCrumb, TpersonCredencial, TUpload} from "../models/interface";

@Injectable()

export class PrestoService {

	public _prestoSearchBy: string[];

	private enrolamientoResultsNombre = new BehaviorSubject<Object>([]);
	public enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();

	public enrolamientoPerson = new BehaviorSubject<PersonaEnrolar>(new PersonaEnrolar());
	public personEnrolar = this.enrolamientoPerson.asObservable();

	public impresionPerson = new BehaviorSubject<PersonaEnrolar>(null);
	public impresion$ = this.impresionPerson.asObservable();

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
		let results: Array<PersonaEnrolar> = <any>this.enrolamientoResultsNombre.getValue();
		this.enrolamientoPerson.next(
			results.find(res => {
				return res._id === personId;
			}));
	}

	setImpresion(personId: string) {
		let results: Array<PersonaEnrolar> = <any>this.enrolamientoResultsNombre.getValue();

		this.impresionPerson.next(
			new PersonaEnrolar(
				results.find(res => {
					return res._id === personId;
				})));
	}

	saveEnrolamiento(personEnrol: IEmpresa) {

		let params: HttpParams = GLOBAL.toHttpParams(personEnrol);
		params = params.delete("empresa");
		return this.http.post(GLOBAL.RESTAPINJS + 'saveEnrol', params, {withCredentials: true,});

	}


	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {

		return new Promise(function (resolve, reject) {

			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for (var i = 0; i < files.length; i++) {
				formData.append(name, files[i], files[i].name);
			}

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.withCredentials = true;
			xhr.send(formData);
		});

	}


	setBreadCrumb(params: Array<TBreaCrumb>) {
		this.breadcrumbBS.next(params);
	}

	resetPerson() {
		this.enrolamientoPerson.next(new PersonaEnrolar());
	}

}
