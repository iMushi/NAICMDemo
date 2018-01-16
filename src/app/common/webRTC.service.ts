import {Injectable} from '@angular/core';

@Injectable()

export class WebRTCService {

	_navigator = <any> navigator;
	localStream;

	startStream(hardwareVideo: any, photoCanvas: any) {

		const video = hardwareVideo.nativeElement;
		this._navigator = <any>navigator;

		this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
			|| this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );

		this._navigator.mediaDevices.getUserMedia({video: true})
			.then((stream) => {
				this.localStream = stream;
				video.srcObject = stream;
				video.play();
			});
	}

	takePicture(hardwareVideo: any, photoCanvas: any) : string {

		const pc: any = document.querySelector('#photoCanvas');
		const video: any = document.querySelector('#hardwareVideo');


		pc.setAttribute('width', video.videoWidth);
		pc.setAttribute('height', video.videoHeight);

		pc.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

		const data = pc.toDataURL('image/png');

		//
		// let photoEle = document.createElement('img');

		// photoEle.src = data;
		// document.body.appendChild(photoEle);
		return data;
	}

	stopStream() {
		const tracks = this.localStream.getTracks();
		tracks.forEach((track) => {
			track.stop();
		});
	}
}
