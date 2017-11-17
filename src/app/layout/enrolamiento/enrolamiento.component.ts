import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {WebRTCService} from "../../common/webRTC.service";

declare var jQuery : any;
declare var $: any;


@Component({
	selector: 'app-enrolamiento',
	templateUrl: './enrolamiento.component.html',
	styleUrls: ['./enrolamiento.component.css'],
	providers: [WebRTCService]
})

export class EnrolamientoComponent implements OnInit,OnDestroy {


	@ViewChild('hardwareVideo') hardwareVideo: any;
	@ViewChild('photoCanvas') photoCanvas: any;

	@Output() breadCrumb = new EventEmitter();

	public isStreaming:boolean;

	constructor(
		private webRTC: WebRTCService
	) {
		this.isStreaming = false;
	}

	ngOnInit() {
		 // this.iniciaStream();
	}

	ngOnDestroy(): void {
		this.stopStream();
	}

	iniciaStream(){
		this.webRTC.startStream(this.hardwareVideo, this.photoCanvas);
		this.isStreaming = true;
	}

	stopStream(){
		this.webRTC.stopStream();
		this.isStreaming = false;
	}

	changeBread(ev, data) {
		document.querySelector(".breadcrumb > li.active")
			.innerHTML = data.title;
	}

}
