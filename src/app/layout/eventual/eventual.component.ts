import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {PrestoService} from "../../common/presto.service";
import {WebRTCService} from "../../common/webRTC.service";
import {GLOBAL} from "../../common/global";
import {Router} from "@angular/router";

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

	@ViewChild('imgEventual') imgEventual: ElementRef;
	@ViewChild('hardwareVideo') hardwareVideo: any;
	@ViewChild('photoCanvas') photoCanvas: any;


	public url = GLOBAL.RESTAPINJS + 'searchEmpresa';
	public api = 'http';

	constructor(private _prestoService: PrestoService, private _webRTC: WebRTCService, private _router : Router) {
	}

	ngOnInit() {

		console.log(this.imgEventual)

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
			acceso: new FormControl('', Validators.required),
			motivo: new FormControl('', Validators.required),
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
		this.imgEventual.nativeElement.src = this.imageUrl;
		this.eventualForm.controls['imageBase64'].setValue(this.imageUrl);
		this.stopStream();
	}

	handleResultSelected(result){
		this.eventualForm.controls['razonSocial'].setValue(result.nombreEmpresa.toUpperCase());
		this.idEmpresa = result._id;
	}

	guardar(){
		if(!this.eventualForm.valid) return;
	}
	cancelEventual(){
		this._router.navigate(['/']);
	}

}
