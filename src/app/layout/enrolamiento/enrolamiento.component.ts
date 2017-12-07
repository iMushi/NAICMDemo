import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WebRTCService} from "../../common/webRTC.service";
import {PrestoService} from "../../common/presto.service";
import {GLOBAL} from "../../common/global";
import {Router} from "@angular/router";
import {PersonaEnrolar} from "../../models/PersonaEnrolar";
import {FormControl, FormGroup, Validators} from "@angular/forms";


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

	public personEnrolar: PersonaEnrolar = new PersonaEnrolar();

	public subscriber;
	public elementTypeQR: 'canvas';

	/* Datos generados en el proceso de Enrolamiento, se van a la BD como control*/

	public valueQR: string = '1';
	public credEmpresa: string = '';
	public credOcupacion: string = '';
	public credIdEmpresa: number;
	public filesToUpload: Array<File> = [];

	/***********/


	public enrolFrom : FormGroup;


	constructor(private webRTC: WebRTCService,
				private _prestoService: PrestoService,
				private _router: Router) {

		this.isStreaming = false;
	}


	@ViewChild('currImgPhoto') imgEle: ElementRef;

	ngOnInit() {

		this.cmbSexoChange(GLOBAL.MALE);



		this.enrolFrom = new FormGroup({
			nombre : new FormControl('',Validators.required)
		});




		this.subscriber = this._prestoService.personEnrolar.subscribe(
			res => {

				console.log("====> SubcriberPersonEnrolar");

				this.personEnrolar = new PersonaEnrolar(res);
				this.cmbSexoChange(this.personEnrolar.sexo);
				this.qrModelChange();
				this.onEmpresaChange(this.personEnrolar.empresa[0]);
			},
			error => console.log(error)
		);

		this._prestoService.setBreadCrumb([{
				routerLink: "/enrolamiento",
				txt: "Enrolamiento",
				class: ""
			}, {
				routerLink: "/enrolamiento",
				txt: "Finalizar Enrolamiento",
				class: "active"
			}]
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

		let photoInfo = document.createElement('img');
		photoInfo.src = this.webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
		this.stopStream();
		this.currImgPhoto = photoInfo.src;
		this.uploadEnrolImage();
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

	uploadEnrolImage() {

		var file = this.dataURLtoFile(this.currImgPhoto, this.personEnrolar._id + '.png');

		this.filesToUpload = [file];

		this._prestoService.makeFileRequest(GLOBAL.RESTAPINJS + 'saveEnrolImage/' + this.personEnrolar._id , [], this.filesToUpload, 'image')
			.then(
				(success: any) => {
					console.log(success);
				},
				error => {
					console.log("Ocurrio un Error al subir Archivo =====> ");
					console.log(error);
				}
			);

	}


	dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type: mime});
	}

	finalizarEnrol() {

		console.log(this.personEnrolar);

		this.personEnrolar.enrolComplete = true;

		this._prestoService.saveEnrolamiento(this.personEnrolar).subscribe(
			res => console.log(res),
			err => console.log(err)
		);

	}


}
