import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../common/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {


	constructor(private _router: Router, private _authService: AuthService) {
	}


	canActivate() {

		let identity = this._authService.getIdentity();

		if (identity) {
			return true;
		} else {
			this._router.navigate(['/login']);
			return false;
		}
	}
}
