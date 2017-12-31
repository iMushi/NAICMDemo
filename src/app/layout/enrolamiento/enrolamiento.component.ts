import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WebRTCService } from '../../common/webRTC.service';
import { PrestoService } from '../../common/presto.service';
import { GLOBAL } from '../../common/global';
import { Router } from '@angular/router';
import { PersonaEnrolar } from '../../models/PersonaEnrolar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmpresa, TpersonCredencial } from '../../models/interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-enrolamiento',
	templateUrl: './enrolamiento.component.html',
	styleUrls: ['./enrolamiento.component.css'],
	providers: [WebRTCService]
})

export class EnrolamientoComponent implements OnInit, OnDestroy {

	public personCred: TpersonCredencial;

	@ViewChild('hardwareVideo') hardwareVideo: any;
	@ViewChild('photoCanvas') photoCanvas: any;

	public isStreaming: boolean;
	public currImgPhoto: string = GLOBAL.MPHOTOURL;
	public personEnrolar: PersonaEnrolar = new PersonaEnrolar();
	public subscriber;
	public completed = false;

	public imagenes: Array<any>;

	/* Datos generados en el proceso de Enrolamiento, se van a la BD como control*/

	public credEmpresa = '';
	public credOcupacion = '';
	public credIdEmpresa: number;
	public filesToUpload: Array<File> = [];

	/***********/


	public enrolFrom: FormGroup;
	@ViewChild('currImgPhoto') imgEle: ElementRef;

	constructor(private webRTC: WebRTCService,
				private _prestoService: PrestoService,
				private _router: Router) {

		this.isStreaming = false;
	}

	ngOnInit() {

		this.enrolFrom = new FormGroup({
			nombre: new FormControl('', Validators.required),
			apellidoPaterno: new FormControl('', Validators.required),
			apellidoMaterno: new FormControl('', Validators.required),
			fechaNacimiento: new FormControl('', Validators.required),
			lugarNacimiento: new FormControl('', Validators.required),
			sexo: new FormControl('', Validators.required),
			codigoPostal: new FormControl('', Validators.required),
			telefono: new FormControl('', Validators.required),
			telefonoEmergencia: new FormControl('', Validators.required),
			contactoEmergencia: new FormControl('', Validators.required),
			nss: new FormControl('', Validators.required),
			rfc: new FormControl('', Validators.required),
			estadoCivil: new FormControl('', Validators.required),
			tipoSangre: new FormControl('', Validators.required),
			registroPatronal: new FormControl('', Validators.required),
			accesoOtorgado: new FormControl('', Validators.required),
			motivoAcceso: new FormControl('', Validators.required),
			image: new FormControl('', Validators.required),
			enrolComplete: new FormControl('', Validators.required),
			empresaCredId: new FormControl(''),
			seniasParticulares: new FormControl(''),
			licencia: new FormControl(''),
			tipoLicencia: new FormControl(''),
			direccion: new FormControl(''),
			enrolActive: new FormControl(''),
			rutaImagenes: new FormControl(''),
			__v: new FormControl(''),
			_id: new FormControl('', Validators.required)
		});

		this.enrolFrom.get('nombre').valueChanges.subscribe(
			value => {
				this.personEnrolar.nombre = value;
				this.qrModelChange();
			}
		);

		this.enrolFrom.get('apellidoPaterno').valueChanges.subscribe(
			value => {
				this.personEnrolar.apellidoPaterno = value;
				this.qrModelChange();
			}
		);

		this.enrolFrom.get('rfc').valueChanges.subscribe(
			value => {
				this.personEnrolar.rfc = value;
				this.qrModelChange();
			}
		);

		this.enrolFrom.get('image').valueChanges.subscribe(
			value => {
				this.personEnrolar.image = value;
				this.qrModelChange();
			}
		);


		this.enrolFrom.valueChanges.subscribe(
			values => this.validateFormCompletion()
		);


		this.subscriber = this._prestoService.personEnrolar.subscribe(
			res => {


				this.personEnrolar.empresa.forEach((value, index) => {
					this.enrolFrom.removeControl(`ocupacionEmpresa_${index}`);
					this.enrolFrom.removeControl(`fechaContratoEmpresa_${index}`);
				});


				this.personEnrolar = new PersonaEnrolar(res);

				// Setear datos a form group
				delete res.empresa;
				this.enrolFrom.setValue(res);

				this.cmbSexoChange(this.personEnrolar.sexo);
				this.onEmpresaChange(this.personEnrolar.empresa[0]);

				this.imagenes = this.personEnrolar.rutaImagenes.split(',').map(
					x => GLOBAL.RESTAPINJS + 'getImagePreEnrol/' + x.replace('./', '').replace(/\//g, '|')
				);


				this.personEnrolar.empresa.forEach((item, index) => {
					const controlOcupacion: FormControl = new FormControl(item.ocupacion, Validators.required);
					const controlFechaContrato: FormControl = new FormControl(item.fechaContrato, Validators.required);
					this.enrolFrom.addControl('ocupacionEmpresa_' + index, controlOcupacion);
					this.enrolFrom.addControl('fechaContratoEmpresa_' + index, controlFechaContrato);
				});


			},
			error => console.log(error)
		);

		this._prestoService.setBreadCrumb([{
				routerLink: '/enrolamiento',
				txt: 'Enrolamiento',
				class: ''
			}, {
				routerLink: '/enrolamiento',
				txt: 'Finalizar Enrolamiento',
				class: 'active'
			}]
		);

	}

	validateFormCompletion(): void {
		this.completed = this.enrolFrom.valid
			&& ( this.currImgPhoto.includes('image/png;base64') || this.enrolFrom.controls['image'].value !== '' );
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

		const photoInfo = document.createElement('img');
		photoInfo.src = this.webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
		this.stopStream();
		this.currImgPhoto = photoInfo.src;
		this.uploadEnrolImage();
		this.qrModelChange();
	}

	changeBread(ev, data) {
		document.querySelector('.breadcrumb > li.active')
			.innerHTML = data.title;
	}

	qrModelChange() {

		const imgDisplay = this.currImgPhoto.includes('image/png;base64')
			|| this.personEnrolar.image === '' ? this.currImgPhoto : GLOBAL.RESTAPINJS + 'getImageEnrol/' + this.personEnrolar.image;

		this.personCred = {
			nombre: this.personEnrolar.nombre,
			apellidoPaterno: this.personEnrolar.apellidoPaterno,
			rfc: this.personEnrolar.rfc,
			qrCode: this.personEnrolar.getQRValue(),
			nombreEmpresa: this.credEmpresa,
			ocupacion: this.credOcupacion,
			imgBase64: imgDisplay
		};
	}

	onEmpresaChange(empresa: any) {
		this.credEmpresa = empresa.idEmpresa.nombreEmpresa;
		this.credOcupacion = empresa.ocupacion;
		this.credIdEmpresa = empresa._id;

		this.enrolFrom.controls['empresaCredId'].setValue(empresa._id);


		this.qrModelChange();
	}

	cmbSexoChange(sexValue) {

		this.personEnrolar.sexo = sexValue;

		switch (sexValue) {
			case GLOBAL.MALE:
				this.currImgPhoto = GLOBAL.MPHOTOURL;
				break;
			case GLOBAL.FEMALE:
				this.currImgPhoto = GLOBAL.FPHOTOURL;
				break;
			default :
				this.currImgPhoto = GLOBAL.MPHOTOURL;
		}

		this.qrModelChange();
	}

	uploadEnrolImage() {

		const file = GLOBAL.dataURLtoFile(this.currImgPhoto, this.personEnrolar._id + '.png');

		this.filesToUpload = [file];

		const oldImageFile = this.personEnrolar.image !== '' ? this.personEnrolar.image : 'null';

		this._prestoService.makeFileRequest(GLOBAL.RESTAPINJS + 'saveEnrolImage/' + this.personEnrolar._id + '/' + oldImageFile,
			[], this.filesToUpload, 'image')
			.then(
				(success: IEmpresa) => {

					this.enrolFrom.controls['image'].setValue(success.image);
					this.validateFormCompletion();
				},
				error => {
					console.log('Ocurrio un Error al subir Archivo =====> ');
					console.log(error);
				}
			);
	}


	finalizarEnrol() {

		this.enrolFrom.controls['enrolComplete'].setValue('true');
		this.enrolFrom.controls['enrolActive'].setValue('true');

		this._prestoService.saveEnrolamiento(this.enrolFrom.value).subscribe(
			res => {
				this._router.navigate(['/']);
			},
			(err: HttpErrorResponse) => {
				alert('Ocurrio un Error al Guardar Informacion : ' + err.message);
			}
		);
	}
}
