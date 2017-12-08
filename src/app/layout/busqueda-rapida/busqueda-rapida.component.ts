import {Component, Input, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Router} from "@angular/router";

declare var $;

@Component({
	selector: 'app-busqueda-rapida',
	templateUrl: './busqueda-rapida.component.html',
	styleUrls: ['./busqueda-rapida.component.css']
})
export class BusquedaRapidaComponent implements OnInit {


	public results;

	constructor(private prestoService: PrestoService, private _router: Router) {
	}

	ngOnInit() {
		this.prestoService.enrolamientoBusquedaRapida.subscribe(
			res => {
				this.results = res;
				if (this.results.length) {

					setTimeout(_ => {
						$('#modalEnrolResult').modal('show');
						$('#modalEnrolResult [data-toggle="tooltip"]').tooltip();
					}, 100);
				}
			},
			error => console.log(error)
		);
	}

	setPersonEnrolamiento(personId: string) {

		console.log(personId);

		this.prestoService.setPersonEnrolamiento(personId);


		if (this._router.url !== '/enrolamiento') {
			this._router.navigate(['/enrolamiento']).then();
		}


		$('#modalEnrolResult').modal('hide');

	}

	setPersonImpresion(personId : string){
		this.prestoService.setImpresion(personId);

		if (this._router.url !== '/imprimir') {
			this._router.navigate(['/imprimir']).then();
		}

		$('#modalEnrolResult').modal('hide');

	}

}
