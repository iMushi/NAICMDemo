import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { GLOBAL } from '../../common/global';
import { PrestoService } from '../../common/presto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../common/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MsgService } from '../../common/msg.service';
import { Msg } from '../../models/interface';


@Component({
	selector: 'app-cargamasiva',
	templateUrl: './cargamasiva.component.html',
	styleUrls: ['./cargamasiva.component.css']
})
export class CargamasivaComponent implements OnInit, OnDestroy {


	public uploadBusy: Promise<any>;
	public cargasMasiva: Array<any>;
	public cargaMForm: FormGroup;
	public filesToUpload: Array<any>;
	public filesSelected = {
		cargaZip: '',
		cargaCSV: ''
	};

	public progressCarga = this._prestoService.uploadProgress;

	subjectFile = new BehaviorSubject(true);
	file$ = this.subjectFile.asObservable();

	public config: PaginationInstance = {
		id: 'cargaMasivaPag',
		itemsPerPage: GLOBAL.DEFAULTPERPAGEMASIVA,
		currentPage: 1,
		totalItems: 1
	};

	@ViewChild('cargaCVS') inputCvs: ElementRef;

	constructor(private _prestoService: PrestoService, private  _authService: AuthService, private _msgService: MsgService) {
	}

	ngOnDestroy(): void {

	}

	ngOnInit() {
		this.getCargaMasiva(1);

		this.cargaMForm = new FormGroup({
			csv: new FormControl('', Validators.required),
			zip: new FormControl('', Validators.required)
		});
	}

	getCargaMasiva(pageNumber: number) {

		this._prestoService.getCargaMasiva(pageNumber).subscribe(
			(resp: any) => {

				if (!resp.docs) return;
				this.cargasMasiva = resp.docs.map(
					x => {
						return {
							idBatch: x.idBatch,
							email: x.idUser.email,
							ruta: `${GLOBAL.RESTAPINJS}getResultCarga/${x.idUser.email}|${x.idBatch}|${GLOBAL.cargaMasiva}`,
							rutaError: `${GLOBAL.RESTAPINJS}getResultCarga/${x.idUser.email}|${x.idBatch}|${GLOBAL.errorCargaMasiva}`,
						};
					}
				);
				this.config.currentPage = resp.page;
				this.config.totalItems = resp.total;
			},
			(err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				}
			}
		);

	}

	cancelCarga() {

		[].forEach.call(document.querySelectorAll('input[type=file]'), function (item) {
			item.value = '';
		});


		this.filesSelected = {cargaZip: '', cargaCSV: ''};
		this.subjectFile.next(true);

	}

	guardar() {

		this.uploadBusy = this._prestoService.makeFileRequest(GLOBAL.RESTAPINJS + 'cargaZip', [], this.filesToUpload, [
			'csvCargaZip', 'csvCargaMasiva'
		]).then(
			(resp: Msg) => {
				this._msgService.setMsg(resp);
				this.getCargaMasiva(1);
				this.cancelCarga();
			}
		).catch(
			(err: HttpErrorResponse) => {
				if (err.status === 403) {
					this._authService.logout().subscribe();
				}
			}
		);

	}

	fileChangeEvent(fileInput: any) {

		let subject;
		const fileType = fileInput.target.accept.replace('.', '');

		if (fileType !== fileInput.target.files[0].name.split('.')[1]) {
			fileInput.target.value = '';
			this.cargaMForm.get(fileType).setErrors({
				archivoIncorrecto: true
			});
			this.subjectFile.next(true);
			return;
		} else {
			this.cargaMForm.get(fileType).setErrors(null);
		}

		this.filesSelected[fileInput.target.id] = fileInput.target.files.length ? fileInput.target.files : '';

		if (!!this.filesSelected['cargaZip'] && !!this.filesSelected['cargaCSV']) {
			subject = false;
			this.filesToUpload = [
				this.filesSelected['cargaZip'][0],
				this.filesSelected['cargaCSV'][0]
			];
		} else {
			subject = true;
		}
		this.subjectFile.next(subject);

	}

	onPageChange(number: number) {
		this.config.currentPage = number;
		this.getCargaMasiva(number);

	}
}
