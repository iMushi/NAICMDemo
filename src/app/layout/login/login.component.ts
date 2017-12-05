import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Usuario} from "../../models/User";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../common/auth.service";
import {IUserResponse} from "../../models/interface";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService]
})

export class LoginComponent implements OnInit {

	private Usuario: Usuario;
	private identity: IUserResponse;
	public statusLogin: string = '';

	constructor(private _prestoService: PrestoService
		, private _auth: AuthService
		, private _router: Router) {
		this.Usuario = new Usuario();
	}

	ngOnInit() {

		if (!isUndefined(this._auth.getIdentity()))
			this._router.navigate(['/']);

		this._prestoService.setBreadCrumb([{
			routerLink: '/login',
			class: 'active',
			txt: 'Login'
		}]);
	}

	onSubmit(form: NgForm) {


		if (form.invalid) {
			return false
		} else {
			this._auth.login(this.Usuario).subscribe(
				res => {
					if (res.user && res.token) {
						this.identity = res;
						localStorage.setItem('identity', JSON.stringify(this.identity));
						this._router.navigate(['/']);
					}
				},
				(err: HttpErrorResponse) => {
					this.statusLogin = err.error.message;
					console.log("=======>");
					console.log(err);
				}
			);
		}

	}
}
