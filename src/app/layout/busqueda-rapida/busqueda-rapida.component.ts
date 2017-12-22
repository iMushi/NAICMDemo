import {Component, Input, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Router} from "@angular/router";
import {PaginationInstance} from "ngx-pagination";
import {GLOBAL} from "../../common/global";

declare var $;

@Component({
	selector: 'app-busqueda-rapida',
	templateUrl: './busqueda-rapida.component.html',
	styleUrls: ['./busqueda-rapida.component.css']
})
export class BusquedaRapidaComponent implements OnInit {


	public results;

	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: GLOBAL.DEFAULTPERPAGE,
		currentPage: 1,
		totalItems: 1
	};


	constructor(private prestoService: PrestoService, private _router: Router) {
	}

	ngOnInit() {
		this.prestoService.enrolamientoBusquedaRapida.subscribe(
			res => {

				let tmpRes: any = res;

				if (!tmpRes.docs) return;

				this.results = tmpRes.docs;
				this.config.currentPage = tmpRes.page;
				this.config.totalItems = tmpRes.total;

				if (this.results.length) {
					setTimeout(_ => {
						$('#modalEnrolResult').modal({keyboard: true});
						$('#modalEnrolResult [data-toggle="tooltip"]').tooltip();
					}, 100);
				}
			},
			error => console.log(error)
		);
	}

	setPersonEnrolamiento(personAEnrolar: any) {

		this.prestoService.setPersonEnrolamiento(personAEnrolar);

		if (this._router.url !== '/enrolamiento') {
			this._router.navigate(['/enrolamiento']).then();
		}

		$('#modalEnrolResult').modal('hide');
	}

	setPersonImpresion(personId: string) {
		this.prestoService.setImpresion(personId);

		if (this._router.url !== '/imprimir') {
			this._router.navigate(['/imprimir']).then();
		}

		$('#modalEnrolResult').modal('hide');
	}

	onPageChange(number: number) {
		this.config.currentPage = number;
		this.prestoService.getNextPageByName(number);
	}
}
