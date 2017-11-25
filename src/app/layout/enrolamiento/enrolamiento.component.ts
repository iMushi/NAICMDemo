import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WebRTCService} from "../../common/webRTC.service";
import {PrestoService} from "../../common/presto.service";
import {GLOBAL} from "../../common/global";
import {IEmpresa} from "../../common/interface";
import {Router} from "@angular/router";
import {PersonaEnrolar} from "../../common/PersonaEnrolar";


declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-enrolamiento',
	templateUrl: './enrolamiento.component.html',
	styleUrls: ['./enrolamiento.component.css'],
	providers: [WebRTCService]
})

export class EnrolamientoComponent implements OnInit, OnDestroy {

	@ViewChild('hardwareVideo') hardwareVideo: any;
	@ViewChild('photoCanvas') photoCanvas: any;

	public isStreaming: boolean;
	public currImgPhoto: string = GLOBAL.MPHOTOURL;
	public photoInfo: HTMLImageElement;

	public personEnrolar: PersonaEnrolar = new PersonaEnrolar();

	public subscriber;
	public elementTypeQR: 'canvas';

	/* Datos generados en el proceso de Enrolamiento, se van a la BD como control*/

	public valueQR: string = '1';
	public credEmpresa: string = '';
	public credOcupacion: string = '';
	public credIdEmpresa: number;

	/***********/

	constructor(private webRTC: WebRTCService,
				private _prestoService: PrestoService,
				private _router: Router) {

		this.isStreaming = false;
		this.photoInfo = null;

		console.log("Constructor Enrolamiento ===> ");

	}


	ngOnInit() {


		console.log("ngOnInits Enrolamiento ===> ");

		this.cmbSexoChange(GLOBAL.MALE);

		this.subscriber = this._prestoService.personEnrolar.subscribe(
			res => {

				this.personEnrolar = new PersonaEnrolar(res);


				this.cmbSexoChange(this.personEnrolar.sexo);
				this.qrModelChange();
				this.onEmpresaChange(this.personEnrolar.empresas[0]);


			},
			error => console.log(error)
		);

	}


	ngOnDestroy(): void {
		if (this.isStreaming) {
			this.stopStream();
		}
		this.subscriber.unsubscribe();
		this._prestoService.resetPerson();

	}

	iniciaStream() {
		this.webRTC.startStream(this.hardwareVideo, this.photoCanvas);
		this.isStreaming = true;
	}

	stopStream() {
		this.webRTC.stopStream();
		this.isStreaming = false;
	}

	tomarFoto() {
		this.photoInfo = this.webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
		this.stopStream();
		this.currImgPhoto = this.photoInfo.src;
	}

	changeBread(ev, data) {
		document.querySelector(".breadcrumb > li.active")
			.innerHTML = data.title;
	}

	qrModelChange() {
		this.valueQR = this.personEnrolar.getQRValue();
		console.log(this.valueQR);
	}


	onEmpresaChange(empresa: any) {

		this.credEmpresa = empresa.nombreEmpresa;
		this.credOcupacion = empresa.ocupacion;
		this.credIdEmpresa = empresa.id;

	}


	cmbSexoChange(sexValue) {

		this.personEnrolar.sexo = sexValue;

		switch (sexValue) {
			case GLOBAL.MALE:
				this.currImgPhoto = GLOBAL.MPHOTOURL;
				break;
			case GLOBAL.FEMALE:
				this.currImgPhoto = GLOBAL.FPHOTOURL
				break;
			default :
				this.currImgPhoto = GLOBAL.MPHOTOURL;
		}
	}

}
