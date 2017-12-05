import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {IEmpresa} from "../../models/interface";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit , OnDestroy {


	public personBuscar : IEmpresa;


	constructor(private _prestoService: PrestoService,private _router : Router) {
	}

	ngOnDestroy(): void {

	}

	ngOnInit() {

		this._prestoService.setBreadCrumb([
			{routerLink: '/busqueda', class: 'active', txt: 'Búsqueda de Personal'}
		]);
		this.personBuscar = {
			_id:null,
			nombre:null,
			apellidoPaterno:null,
			apellidoMaterno:null,
			rfc:null
		};

	}

	buscarPersona(){
		this._prestoService.getSearchEnrolamiento(this.personBuscar);
	}
}
