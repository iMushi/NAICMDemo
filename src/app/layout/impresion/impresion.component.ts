import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {TpersonCredencial} from "../../models/interface";

@Component({
	selector: 'app-impresion',
	templateUrl: './impresion.component.html',
	styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit, OnDestroy {


	public credInfo: TpersonCredencial;
	private impresionSub;

	constructor(private _prestoService: PrestoService) {

	}

	ngOnDestroy(): void {
  		this.impresionSub.unsubscribe();
	}

	ngOnInit() {

		this.impresionSub = this._prestoService.impresion$.subscribe(
			value => {

				let empresaCred = value.empresa.find(item => {
					return item._id == value.empresaCredId
				});

				this.credInfo = {
					nombre : value.nombre,
					apellidoPaterno : value.apellidoPaterno,
					rfc : value.rfc,
					qrCode : value.getQRValue(),
					ocupacion : empresaCred.ocupacion,
					nombreEmpresa : empresaCred.nombreEmpresa,
					imgName : value.image
				};

			}
		);

	}
}
