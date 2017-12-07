import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Usuario} from "../../models/User";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../common/auth.service";
import {IUserResponse} from "../../models/interface";
import {Router} from "@angular/router";
import {isUndefined} from "util";
import {HttpErrorResponse} from "@angular/common/http";

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


	public loginForm;

	public formError: { [id: string]: string } = {
		'email': '',
		'password': ''
	};

	public errorMsg: { [id: string]: { [id: string]: string } } = {
		email: {
			'required': 'Ingrese E-mail.',
			'email': 'E-mail no es valido.'
		},
		password: {
			'required': 'Ingrese Contraseña.'
		}
	}


	ngOnInit() {

		this.loginForm = new FormGroup({
			email: new FormControl("",
				Validators.compose([Validators.required, Validators.email])),
			password: new FormControl("",
				Validators.compose([Validators.required]))
		});


		this.loginForm.valueChanges.subscribe(
			data => this.validateData(data)
		);


		if (!isUndefined(this._auth.getIdentity()))
			this._router.navigate(['/']);

		this._prestoService.setBreadCrumb([{
			routerLink: '/login',
			class: 'active',
			txt: 'Login'
		}]);
	}

	validateData(data: any) {

		for (let field in this.formError) {
			this.formError[field] = '';
			let hasError = this.loginForm.controls[field].touched &&
				!this.loginForm.controls[field].valid;

			if (hasError) {
				for (let key in this.loginForm.controls[field].errors) {
					this.formError[field] += this.errorMsg[field][key] + ' ';
				}
			}
		}
	}

	onSubmit(form: NgForm) {

		if (form.invalid) {
			return false
		} else {

			this.Usuario = form.value;

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
