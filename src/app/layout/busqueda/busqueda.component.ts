import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {GLOBAL} from "../../common/global";


@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit , OnDestroy {

	public empresaBuscar : string;
	public busquedaGroup

	public url = GLOBAL.RESTAPINJS + 'searchEmpresa';
	public api = 'http';

	constructor(private _prestoService: PrestoService,private _router : Router) {
	}

	ngOnDestroy(): void {

	}

	ngOnInit() {

		this._prestoService.setBreadCrumb([
			{routerLink: '/busqueda', class: 'active', txt: 'Búsqueda de Personal'}
		]);


		this.busquedaGroup = new FormGroup({
			empresaBus: new FormControl(''),
			nombre: new FormControl(''),
			apellidoPaterno: new FormControl(''),
			apellidoMaterno: new FormControl(''),
			rfc : new FormControl('')
		});
		// Save
	}

	buscarPersona(){
		let values = this.busquedaGroup.value;
		let query  = this.busquedaGroup.controls['empresaBus'].value;

		delete values.empresaBus;

		values.idEmpresa=query == ''? query : this.empresaBuscar;
		this._prestoService.getSearchEnrolamiento(values, 1);

	}

	handleResultSelected(result){
		this.busquedaGroup.controls['empresaBus'].setValue(result.nombreEmpresa.toUpperCase());
		this.empresaBuscar = result._id;
	}
}
