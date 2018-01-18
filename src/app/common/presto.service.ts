import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { GLOBAL } from './global';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PersonaEnrolar } from '../models/PersonaEnrolar';
import { IEmpresa, PaginatedIEmpresa, TBreaCrumb, TEventual } from '../models/interface';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MsgService } from './msg.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class PrestoService {

	public _prestoSearchBy: string[];
	public enrolamientoResultsNombre = new BehaviorSubject<Object>([]);
	public enrolamientoBusquedaRapida = this.enrolamientoResultsNombre.asObservable();
	public enrolamientoPerson = new BehaviorSubject<PersonaEnrolar>(new PersonaEnrolar());
	public personEnrolar = this.enrolamientoPerson.asObservable();
	public impresionPerson = new BehaviorSubject<PersonaEnrolar>(null);
	public impresion$ = this.impresionPerson.asObservable();
	public uploadProgress = new Subject();
	private subjectManageEnrolamiento = new BehaviorSubject<PaginatedIEmpresa>(null);
	public manageEnrol$ = this.subjectManageEnrolamiento.asObservable();
	private breadcrumbBS = new BehaviorSubject<TBreaCrumb[]>([]);
	public breadEmitted$ = this.breadcrumbBS.asObservable();
	private lastSearch: any;
	private pageFunction: string;

	constructor(private http: HttpClient, private _authService: AuthService, private _router: Router, private _msgService: MsgService) {
	}


	getEnrolamientoByName(param: string[], pageNumber: number): void {

		this._prestoSearchBy = param;

		this.lastSearch = param;

		const params = new HttpParams()
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

	getSearchEnrolamiento(jsonParams: IEmpresa, pageNumber: number): void {

		this.lastSearch = jsonParams;

		let params = new HttpParams();

		for (const obj in jsonParams) {
			if (jsonParams[obj] && jsonParams[obj] !== '') {
				params = params.append(obj, GLOBAL.includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
			}
		}

		this.pageFunction = 'getSearchEnrolamiento';

		params = params.append('page', pageNumber.toString());
		params = params.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());

		this.http.get<PaginatedIEmpresa>(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			res => {
				this.enrolamientoResultsNombre.next(res);
			}, (err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				}
			}
		);
	}

	getSearchManagement(jsonParams: IEmpresa, pageNumber: number): void {
		this.lastSearch = jsonParams;

		let params = new HttpParams();

		for (const obj in jsonParams) {
			if (jsonParams[obj] && jsonParams[obj] !== '') {
				params = params.append(obj, GLOBAL.includesAny(obj, ['idEmpresa', 'enrolComplete']) ? jsonParams[obj] : jsonParams[obj].toUpperCase());
			}
		}

		params = params.append('page', pageNumber.toString());
		params = params.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());

		this.http.get<PaginatedIEmpresa>(GLOBAL.RESTAPINJS + 'searchEnrol', {params: params, withCredentials: true}).subscribe(
			resp => {
				if (resp.total > 0) {
					this.setManagementRes(resp);
				} else {
					this._msgService.setMsg({message: 'No se encontraron Registros'});
				}
			}, (err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				} else {
					this._msgService.setMsg(err);
				}
			}
		);
	}

	getNextPageByName(pageNumber: number): void {
		this[this.pageFunction](this.lastSearch, pageNumber);
	}

	getNextPageByManage(pageNumber: number): void {
		this.getSearchManagement(this.lastSearch, pageNumber);
	}

	setPersonEnrolamiento(person: any): void {
		const results: Array<PersonaEnrolar> = <any>this.enrolamientoResultsNombre.getValue();
		this.enrolamientoPerson.next(person);
	}

	setImpresion(personId: string): void {
		const results: Array<PersonaEnrolar> = <any>this.enrolamientoResultsNombre.getValue();

		this.impresionPerson.next(
			new PersonaEnrolar(
				results.find(res => {
					return res._id === personId;
				})));
	}

	saveEnrolamiento(personEnrol: IEmpresa): Observable<Object> {
		console.log(personEnrol);
		let params: HttpParams = GLOBAL.toHttpParams(personEnrol
			, ['_id', 'empresaId', 'empresaCredId', 'image', 'enrolComplete', 'enrolActive', 'rutaImagenes', 'biometricoFinal', 'biometrico']);
		params = params.delete('empresa');
		return this.http.post(GLOBAL.RESTAPINJS + 'saveEnrol', params, {withCredentials: true});
	}

	saveEventual(eventual: TEventual): Observable<any> {
		const params: HttpParams = GLOBAL.toHttpParams(eventual, ['idEmpresa', 'imageBase64', 'fechaAcceso']);
		return this.http.post(GLOBAL.RESTAPINJS + 'saveEventual', params, {withCredentials: true});
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string | Array<string>): Promise<any> {

		return new Promise(function (resolve, reject) {

			const formData: any = new FormData();
			const xhr = new XMLHttpRequest();

			for (let i = 0; i < files.length; i++) {
				if (Array.isArray(name)) {
					formData.append(name[i], files[i], files[i].name);
				} else {
					formData.append(name, files[i], files[i].name);
				}
			}

			xhr.onreadystatechange = function () {
				console.log(xhr);
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};


			xhr.upload.onprogress = function (e) {

				const percentComplete = Math.ceil((e.loaded / e.total) * 100);
				console.log('====>', percentComplete);

				this.uploadProgress.next(percentComplete);

			}.bind(this);


			xhr.open('POST', url, true);
			xhr.withCredentials = true;
			xhr.send(formData);
		});

	}

	setBreadCrumb(params: Array<TBreaCrumb>): void {
		this.breadcrumbBS.next(params);
	}

	resetPerson(): void {
		this.enrolamientoPerson.next(new PersonaEnrolar());
	}

	getEventual(pageNumber: number): Observable<Object> {
		const params = new HttpParams()
			.append('page', pageNumber.toString())
			.append('maxPerPage', GLOBAL.DEFAULTPERPAGE.toString());

		return this.http.get(GLOBAL.RESTAPINJS + 'getEventuales', {params: params, withCredentials: true});
	}

	getCargaMasiva(pageNumber: number): Observable<Object> {
		const params = new HttpParams()
			.append('page', pageNumber.toString())
			.append('maxPerPage', GLOBAL.DEFAULTPERPAGEMASIVA.toString());

		const idUser = this._authService.getIdentity().user._id;
		return this.http.get(GLOBAL.RESTAPINJS + 'getCargaMasiva/' + idUser, {params: params, withCredentials: true});
	}

	setManagementRes(data: PaginatedIEmpresa): void {
		this.subjectManageEnrolamiento.next(data);
	}
}
