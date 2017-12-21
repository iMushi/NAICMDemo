import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {PrestoService} from "../../common/presto.service";
import {WebRTCService} from "../../common/webRTC.service";
import {GLOBAL} from "../../common/global";
import {Router} from "@angular/router";
import {TEventual} from "../../models/interface";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {AuthService} from "../../common/auth.service";

@Component({
	selector: 'app-eventual',
	templateUrl: './eventual.component.html',
	styleUrls: ['./eventual.component.css'],
	providers: [WebRTCService]
})

export class EventualComponent implements OnInit {

	public completed: boolean = false;
	public eventualForm: FormGroup;
	public imageUrl: string;
	public isStreaming: boolean = false;

	public idEmpresa : string;
	public filesToUpload = [];

	@ViewChild('imgEventual') imgEventual: ElementRef;
	@ViewChild('hardwareVideo') hardwareVideo: any;
	@ViewChild('photoCanvas') photoCanvas: any;


	public url = GLOBAL.RESTAPINJS + 'searchEmpresa';
	public api = 'http';

	constructor(private _prestoService: PrestoService, private _webRTC: WebRTCService, private _router : Router, private  _authService : AuthService) {
	}

	ngOnInit() {

		this._prestoService.setBreadCrumb([{
				routerLink: "/eventual",
				txt: "Registro Eventual",
				class: "active"
			}]
		);

		this.eventualForm = new FormGroup({
			nombre: new FormControl('', Validators.required),
			apellidoPaterno: new FormControl('', Validators.required),
			apellidoMaterno: new FormControl('', Validators.required),
			telefono: new FormControl('', Validators.required),
			telefonoEmergencia: new FormControl('', Validators.required),
			ocupacion: new FormControl('', Validators.required),
			razonSocial: new FormControl('', Validators.required),
			accesoOtorgado: new FormControl('', Validators.required),
			motivoAcceso: new FormControl('', Validators.required),
			imageBase64 : new FormControl('',Validators.required)
		});
	}

	iniciaStream() {
		this._webRTC.startStream(this.hardwareVideo, this.photoCanvas)
		this.isStreaming = true;
	}

	stopStream(){
		this.isStreaming = false;
		this._webRTC.stopStream();
	}

	tomarFoto(){
		this.imageUrl = this._webRTC.takePicture(this.hardwareVideo, this.photoCanvas);
		this.imgEventual.nativeElement.style.background = "url('"+this.imageUrl+ "')";
		this.imgEventual.nativeElement.style.backgroundPosition = "center";
		this.imgEventual.nativeElement.style.backgroundSize =  "150% 100%";
		this.eventualForm.controls['imageBase64'].setValue(this.imageUrl);
		this.stopStream();
	}

	handleResultSelected(result){
		this.eventualForm.controls['razonSocial'].setValue(result.nombreEmpresa.toUpperCase());
		this.idEmpresa = result._id;
	}

	guardar(){
		if(!this.eventualForm.valid) return;

		let eventual : TEventual = {
			nombre : this.eventualForm.controls.nombre.value.toUpperCase(),
			apellidoPaterno : this.eventualForm.controls.apellidoPaterno.value.toUpperCase(),
			apellidoMaterno : this.eventualForm.controls.apellidoMaterno.value.toUpperCase(),
			ocupacion : this.eventualForm.controls.ocupacion.value.toUpperCase(),
			accesoOtorgado: this.eventualForm.controls.accesoOtorgado.value.toUpperCase(),
			telefono : this.eventualForm.controls.telefono.value,
			telefonoEmergencia : this.eventualForm.controls.telefonoEmergencia.value,
			fechaAcceso : new Date(),
			idEmpresa : this.idEmpresa,
			imageBase64 : this.eventualForm.controls.imageBase64.value,
			motivoAcceso : this.eventualForm.controls.motivoAcceso.value.toUpperCase()
		};

		this._prestoService.saveEventual(eventual).toPromise().then(
			resp=> {
				return this.uploadImageEventual(resp);
			}
		).then(
			resp => {console.log(1111);
				return this.cancelEventual();
			}
		).catch(
			(err : HttpErrorResponse)=>{
				if(err.status===403){
					this._authService.logout().subscribe();
				}
			}
		);
	}

	uploadImageEventual(resp : any){
		var file = GLOBAL.dataURLtoFile(this.imageUrl, resp._id + '.png');
		this.filesToUpload = [file];
		return this._prestoService.makeFileRequest(GLOBAL.RESTAPINJS + 'saveImageEventual/' + resp._id , [], this.filesToUpload, 'image');
	}

	cancelEventual(){
		this._router.navigate(['/']);
	}

}
