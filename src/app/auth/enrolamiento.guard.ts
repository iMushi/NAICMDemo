import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PrestoService} from '../common/presto.service';
import {IEmpresa} from '../models/interface';

@Injectable()
export class EnrolamientoGuard implements CanActivate {

	constructor(private prestoService: PrestoService , private _router: Router) {}

	canActivate(next: ActivatedRouteSnapshot,
				state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if (this.isPerson(this.prestoService.enrolamientoPerson.getValue())) {
			return true;
		}else {
			this._router.navigate(['/']);
			return false;
		}

	}


	isPerson(obj: any): obj is IEmpresa {
		return obj._id !== undefined;
	}
}
