import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "./global";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PersonaEnrolar} from "../models/PersonaEnrolar";
import {IEmpresa, TBreaCrumb, TEventual} from "../models/interface";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

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

	private lastSearch: any;
	private pageFunction;

	constructor(private http: HttpClient, private _authService: AuthService, private _router: Router) {
	}

	getEnrolamientoByName(param: string[], pageNumber: number) {

		this._prestoSearchBy = param;

		this.lastSearch = param;

		let params = new HttpParams()
			.append('nombre', param[0].toUpperCase())
			.append('apellidoPaterno', param[1].toUpperCase())
			.append('page', pageNumber.toString())
			.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());


		this.pageFunction = 'getEnrolamientoByName';

		this.http.get(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, (err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				}
			}
		);
	}

	getSearchEnrolamiento(jsonParams: IEmpresa, pageNumber: number) {

		this.lastSearch = jsonParams;

		let params = new HttpParams();

		for (let obj in jsonParams) {
			if (jsonParams[obj] && jsonParams[obj] !== '')
				params = params.append(obj, obj.includes("idEmpresa") ? jsonParams[obj] : jsonParams[obj].toUpperCase());
		}

		this.pageFunction = 'getSearchEnrolamiento';

		params = params.append('page', pageNumber.toString());
		params = params.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());


		this.http.get(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, (err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				}
			}
		);
	}

	getNextPageByName(pageNumber: number) {
		this[this.pageFunction](this.lastSearch, pageNumber);
	}

	setPersonEnrolamiento(person: any) {
		let results: Array<PersonaEnrolar> = <any>this.enrolamientoResultsNombre.getValue();
		this.enrolamientoPerson.next(person);
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

	saveEventual(eventual: TEventual): Observable<any> {
		let params: HttpParams = GLOBAL.toHttpParams(eventual);
		return this.http.post(GLOBAL.RESTAPINJS + 'saveEventual', params, {withCredentials: true});
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

	getEventual(pageNumber: number) {
		let params = new HttpParams()
			.append('page', pageNumber.toString())
			.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());

		return this.http.get(GLOBAL.RESTAPINJS+'getEventuales',{params : params, withCredentials:true});
	}

	getCargaMasiva(pageNumber : number){
		let params = new HttpParams()
			.append('page', pageNumber.toString())
			.append('maxPerPage', GLOBAL.DEFAULTPERPAGEMASIVA.toString());

		let idUser = this._authService.getIdentity().user._id;
		return this.http.get(GLOBAL.RESTAPINJS+'getCargaMasiva/'+idUser,{params : params, withCredentials:true});
	}
}
