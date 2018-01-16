import { Router } from '@angular/router';
import { PersonaEnrolar } from './../../models/PersonaEnrolar';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrestoService } from '../../common/presto.service';
import { PaginationInstance } from 'ngx-pagination';
import { GLOBAL } from '../../common/global';
import { IEmpresa } from '../../models/interface';

@Component({
	selector: 'app-manage-enrolamiento',
	templateUrl: './manage-enrolamiento.component.html',
	styleUrls: ['./manage-enrolamiento.component.css']
})
export class ManageEnrolamientoComponent implements OnInit, OnDestroy {

	public enrolados: Array<IEmpresa>;
	public enroladosCompleto: Array<IEmpresa>;
	public config: PaginationInstance = {
		id: 'managePag',
		itemsPerPage: GLOBAL.DEFAULTPERPAGE,
		currentPage: 1,
		totalItems: 1
	};
	private subscriber;

	constructor(private _prestoService: PrestoService, private _router: Router) {
	}

	ngOnDestroy(): void {
		this.subscriber.unsubscribe();
	}

	ngOnInit() {

		this.subscriber = this._prestoService.manageEnrol$.subscribe(resp => {

			if (!resp || !resp.docs) {
				return;
			}
			this.enrolados = resp.docs;
			this.config.currentPage = resp.page;
			this.config.totalItems = resp.total;
			this.enroladosCompleto = resp.docs;
			this.enrolados = resp.docs.map(x => {
				return {
					_id: x._id,
					nombre: x.nombre,
					apellidoPaterno: x.apellidoPaterno,
					apellidoMaterno: x.apellidoMaterno,
					enrolActive: x.enrolActive,
					empresa: x.empresa
				};
			});
		});
	}

	onPageChange(number) {
		this.config.currentPage = number;
		this._prestoService.getNextPageByManage(number);
	}

	setPersonEnrolamiento(personAEnrolar: any) {

		this._prestoService.setPersonEnrolamiento(
			this.enroladosCompleto.find( enrolado => enrolado._id === personAEnrolar._id )
		);
		this._router.navigate(['/enrolamiento']).then();
	}
}
