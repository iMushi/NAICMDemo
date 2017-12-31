import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {ActivatedRoute, Router, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {GLOBAL} from "../../common/global";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../common/auth.service";
import {IEmpresa} from "../../models/interface";
import {MsgService} from "../../common/msg.service";
import {NextObserver, Observer} from "rxjs/Observer";


@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

	public empresaBuscar: string;
	public busquedaGroup
	public searchType: string;

	public url = GLOBAL.RESTAPINJS + 'searchEmpresa';
	public api = 'http';

	constructor(private _prestoService: PrestoService,
				private _router: Router,
				private _activeRoute: ActivatedRoute,
				private _authService: AuthService,
				private _msgService: MsgService) {
	}

	ngOnInit() {

		this._activeRoute.paramMap.forEach(
			(value: ParamMap) => {
				this.searchType = value.get('searchType');
			}
		);


		this._prestoService.setBreadCrumb([
			{routerLink: '/busqueda', class: 'active', txt: 'Búsqueda de Personal'}
		]);


		this.busquedaGroup = new FormGroup({
			empresaBus: new FormControl(''),
			nombre: new FormControl(''),
			apellidoPaterno: new FormControl(''),
			apellidoMaterno: new FormControl(''),
			rfc: new FormControl('')
		});
	}

	buscarPersona() {
		let values = this.busquedaGroup.value;
		let query = this.busquedaGroup.controls['empresaBus'].value;

		delete values.empresaBus;

		values.idEmpresa = query == '' ? query : this.empresaBuscar;

		if (this.searchType === GLOBAL.BUSCAENROL) {

			this._prestoService.getSearchEnrolamiento(values,1)

		} else if (this.searchType === GLOBAL.BUSCAMANAGEMENT) {

			values.enrolComplete = 'true';

			this._prestoService.getSearchManagement(values, 1);
			this._router.navigate([`/busqueda/${this.searchType}/list`]);
		}
	}

	handleResultSelected(result) {
		this.busquedaGroup.controls['empresaBus'].setValue(result.nombreEmpresa.toUpperCase());
		this.empresaBuscar = result._id;
	}
}
