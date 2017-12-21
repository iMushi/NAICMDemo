import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from "ngx-pagination";
import {GLOBAL} from "../../common/global";
import {PrestoService} from "../../common/presto.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../common/auth.service";

@Component({
	selector: 'app-cargamasiva',
	templateUrl: './cargamasiva.component.html',
	styleUrls: ['./cargamasiva.component.css']
})
export class CargamasivaComponent implements OnInit {


	public cargasMasiva : Array <any>;


	public config: PaginationInstance = {
		id: 'cargaMasivaPag',
		itemsPerPage: GLOBAL.DEFAULTPERPAGEMASIVA,
		currentPage: 1,
		totalItems: 1
	};

	constructor(private _prestoService : PrestoService, private  _authService : AuthService) {
	}

	ngOnInit() {
		this.getCargaMasiva(1);
	}


	getCargaMasiva (pageNumber : number){

		this._prestoService.getCargaMasiva(pageNumber).subscribe(
			(resp : any) => {

				if (!resp.docs) return;
				this.cargasMasiva = resp.docs.map(
					x => {
						return {
							idBatch : x.idBatch,
							email : x.idUser.email,
							ruta : `${GLOBAL.RESTAPINJS}getResultCarga/${x.idUser.email}|${x.idBatch}|${GLOBAL.cargaMasiva}`,
							rutaError : `${GLOBAL.RESTAPINJS}getResultCarga/${x.idUser.email}|${x.idBatch}|${GLOBAL.errorCargaMasiva}`,
						};
					}
				);
				this.config.currentPage = resp.page;
				this.config.totalItems = resp.total;
			},
			(err : HttpErrorResponse)=>{
				if(err.status===403){
					this._authService.logout().subscribe();
				}
			}
		);

	}

	onPageChange(number: number) {
		this.config.currentPage = number;
		this.getCargaMasiva(number);

	}
}
