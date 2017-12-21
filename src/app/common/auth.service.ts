import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IUserResponse, IUsuario} from "../models/interface";
import {GLOBAL} from "./global";
import {Subscribable} from "rxjs/Observable";
import {isUndefined} from "util";


@Injectable()
export class AuthService {

	identity = null;

	constructor(private _http: HttpClient) {
	}

	login(userToLogin: IUsuario): Subscribable<IUserResponse> {

		let params = new HttpParams().append("email", userToLogin.email).append("password", userToLogin.password);
		return this._http.post<IUserResponse>(GLOBAL.RESTAPINJS + 'login', params, {withCredentials: true});

	}

	getIdentity() {

		let identity = JSON.parse(localStorage.getItem('identity'));

		if (!isUndefined(identity)) {
			this.identity = identity;
		} else {
			this.identity = null;
		}

		return this.identity;
	}

	logout() {

		this.identity = null;
		localStorage.clear();

		return this._http.post<IUserResponse>(GLOBAL.RESTAPINJS + 'logout', null, {withCredentials: true});



	}

}
