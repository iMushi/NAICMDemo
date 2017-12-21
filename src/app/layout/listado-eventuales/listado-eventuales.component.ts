import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {PaginationInstance} from "ngx-pagination";
import {GLOBAL} from "../../common/global";
import {AuthService} from "../../common/auth.service";

@Component({
	selector: 'app-listado-eventuales',
	templateUrl: './listado-eventuales.component.html',
	styleUrls: ['./listado-eventuales.component.css']
})
export class ListadoEventualesComponent implements OnInit {

	public eventuales = [];


	public config: PaginationInstance = {
		id: 'eventualPag',
		itemsPerPage: GLOBAL.DEFAULTPERPAGE,
		currentPage: 1,
		totalItems: 1
	};

	constructor(private _prestoService: PrestoService
		, private _router: Router
		, private _authService: AuthService) {
	}

	ngOnInit() {
		this.getEventuales(1);

	}

	getEventuales (pageNumber : number){

		this._prestoService.getEventual(pageNumber).subscribe(
			(resp: any) => {

				if (!resp.docs) return;
				this.eventuales = resp.docs;
				this.config.currentPage = resp.page;
				this.config.totalItems = resp.total;
				this.eventuales = resp.docs.map(x => {
					return {
						nombre: x.nombre,
						apellidoPaterno: x.apellidoPaterno,
						apellidoMaterno: x.apellidoMaterno,
						empresa: x.idEmpresa.nombreEmpresa,
						imageBase64: GLOBAL.RESTAPINJS + 'getImageEnrol/' + x.imageBase64,
						fechaAcceso: x.fechaAcceso
					}
				});

			}, (err: HttpErrorResponse) => {
				if (err.status == 403) {
					this._authService.logout().subscribe();
				}
			}
		);
	}

	onPageChange(number: number) {
		this.config.currentPage = number;
		this.getEventuales(number);
	}

}
