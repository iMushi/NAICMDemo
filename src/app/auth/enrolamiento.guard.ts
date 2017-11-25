import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PrestoService} from "../common/presto.service";
import {IEmpresa} from "../common/interface";

@Injectable()
export class EnrolamientoGuard implements CanActivate {

	constructor(private prestoService: PrestoService) {}

	canActivate(next: ActivatedRouteSnapshot,
				state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if(this.isPerson(this.prestoService.enrolamientoPerson.getValue())){
			return true;
		}else{
			return false;
		}

	}


	isPerson(obj: any): obj is IEmpresa {
		return obj.id !== undefined;
	}
}
